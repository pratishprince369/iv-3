'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';

// Admin page to seed Firestore with local frames.
// Only accessible by the admin user.
export default function SeedPage() {
  const [status, setStatus] = useState<string>('Idle');
  const [progress, setProgress] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login failed:', error);
      setStatus('Login failed: ' + (error as Error).message);
    }
  };

  const clearDatabase = async () => {
    if (!user || user.email !== 'vadapavwaledada@gmail.com') return;
    
    setStatus('Clearing database...');
    const framesRef = collection(db, 'frames');
    const existing = await getDocs(framesRef);
    for (const d of existing.docs) {
      await deleteDoc(doc(db, 'frames', d.id));
    }
    setStatus('Database cleared. Ready for fresh upload.');
    setProgress(0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(e.target.files);
      setStatus(`Selected ${e.target.files.length} files.`);
    }
  };

  const uploadSelectedFiles = async () => {
    if (!user || user.email !== 'vadapavwaledada@gmail.com') {
      setStatus('Unauthorized: You must be logged in as the admin.');
      return;
    }

    if (!selectedFiles || selectedFiles.length === 0) {
      setStatus('Please select files first.');
      return;
    }

    setStatus('Cleaning existing frames...');
    const framesRef = collection(db, 'frames');
    const existing = await getDocs(framesRef);
    for (const d of existing.docs) {
      await deleteDoc(doc(db, 'frames', d.id));
    }

    setStatus('Uploading selected files...');
    const total = selectedFiles.length;
    let count = 0;

    // Sort files by name to ensure correct index
    const filesArray = Array.from(selectedFiles).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

    for (let i = 0; i < filesArray.length; i++) {
      const file = filesArray[i];
      const frameNum = file.name.replace('frame_', '').replace('.webp', '');

      try {
        const reader = new FileReader();
        const base64Promise = new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });

        const base64Data = await base64Promise;

        await addDoc(framesRef, {
          index: i + 1,
          frameNum,
          data: base64Data,
          mimeType: 'image/webp',
          createdAt: new Date().toISOString(),
        });

        count++;
        setProgress(Math.round((count / total) * 100));
        setStatus(`Uploaded ${file.name} (${count}/${total})`);
      } catch (error) {
        console.error(`Failed to upload ${file.name}:`, error);
      }
    }

    setStatus('Manual upload complete!');
  };

  const seedFrames = async () => {
    if (!user || user.email !== 'vadapavwaledada@gmail.com') {
      setStatus('Unauthorized: You must be logged in as the admin.');
      return;
    }

    setStatus('Cleaning existing frames...');
    const framesRef = collection(db, 'frames');
    const existing = await getDocs(framesRef);
    for (const d of existing.docs) {
      await deleteDoc(doc(db, 'frames', d.id));
    }

    setStatus('Seeding frames from local public folder...');
    const totalFrames = 79;
    let count = 0;

    for (let i = 1; i <= 79; i++) {
      const frameNum = (i / 10).toFixed(1);
      const url = `/frames/frame_${frameNum}.webp`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        
        const blob = await response.blob();
        if (!blob.type.startsWith('image/')) throw new Error(`Not an image: ${blob.type}`);

        const reader = new FileReader();

        const base64Promise = new Promise<string>((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });

        const base64Data = await base64Promise;

        await addDoc(framesRef, {
          index: i,
          frameNum,
          data: base64Data,
          mimeType: 'image/webp',
          createdAt: new Date().toISOString(),
        });

        count++;
        setProgress(Math.round((count / totalFrames) * 100));
        setStatus(`Uploaded frame ${frameNum} (${count}/${totalFrames})`);
      } catch (error) {
        console.error(`Failed to upload frame ${frameNum}:`, error);
        setStatus(`Error on ${frameNum}: ${error instanceof Error ? error.message : 'Unknown'}`);
      }
    }

    setStatus('Seeding complete!');
  };

  return (
    <div className="p-8 bg-black min-h-screen text-white font-sans">
      <h1 className="text-3xl font-bold mb-4">Firebase Seeder</h1>
      
      {!user ? (
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          Login as Admin
        </button>
      ) : (
        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <p>Logged in as: <span className="text-amber-500">{user.email}</span></p>
            <button 
              onClick={clearDatabase}
              className="px-4 py-2 text-xs border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all rounded-lg"
            >
              Clear Database
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Automatic */}
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
              <h2 className="text-xl font-bold mb-4">Option 1: Automatic</h2>
              <p className="text-sm text-gray-400 mb-4">Fetches from public/frames folder on the server.</p>
              <button
                onClick={seedFrames}
                className="w-full px-6 py-3 bg-amber-500 text-black rounded-full font-medium hover:bg-amber-400 transition-colors"
              >
                Start Auto Seeding
              </button>
            </div>

            {/* Option 2: Manual */}
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5">
              <h2 className="text-xl font-bold mb-4">Option 2: Manual Upload (Recommended)</h2>
              <p className="text-sm text-gray-400 mb-4">Select all frames from your local computer.</p>
              <input
                type="file"
                multiple
                accept=".webp"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200 mb-4"
              />
              <button
                onClick={uploadSelectedFiles}
                disabled={!selectedFiles}
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Upload Selected Files
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 border border-white/10 rounded-xl bg-white/5">
        <p className="text-sm text-gray-400 mb-2">Status: {status}</p>
        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="bg-amber-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-right text-xs text-gray-500 mt-1">{progress}%</p>
      </div>
    </div>
  );
}
