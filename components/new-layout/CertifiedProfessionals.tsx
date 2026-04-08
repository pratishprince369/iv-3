import { ShieldPlus } from 'lucide-react';

export default function CertifiedProfessionals() {
  const staffArray = Array.from({ length: 13 }, (_, i) => i);
  const colors = ['bg-blue-100', 'bg-red-100', 'bg-green-100', 'bg-purple-100', 'bg-yellow-100', 'bg-pink-100', 'bg-indigo-100'];

  return (
    <div className="w-full bg-[#f4f7fb] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#020d1f] tracking-tight mb-2 uppercase">13 Certified Professionals</h2>
        <p className="text-gray-500 mb-12 text-lg">Our team of Registered Nurses are highly trained and ready to help you thrive.</p>

        <div className="flex flex-wrap gap-6 items-center justify-start">
          {staffArray.map((idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className={`w-20 h-20 rounded-[2rem] ${colors[idx % colors.length]} flex items-center justify-center p-1 border-4 border-white shadow-sm mb-3 group-hover:-translate-y-1 transition-transform duration-300 relative`}>
                <div className="w-full h-full bg-white/40 rounded-full flex items-center justify-center overflow-hidden relative">
                   <ShieldPlus className="w-8 h-8 text-blue-900/40" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-400 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-[10px] text-white">✓</span>
                </div>
              </div>
              <span className="text-xs font-bold text-gray-700 uppercase">Nurse #{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
