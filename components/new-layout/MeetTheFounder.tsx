import Image from 'next/image';

export default function MeetTheFounder() {
  return (
    <div className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Owner Photo */}
          <div className="relative mx-auto lg:mx-0 max-w-md lg:max-w-none w-full">
            <div className="absolute inset-0 bg-blue-100/50 rounded-3xl -rotate-3 transform scale-105 origin-center hidden md:block"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 w-full aspect-[4/5] bg-[#E5F3FF]">
              <Image 
                src="https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775784550/nurse_e44wz1.png"
                alt="Xyz - Nurse and Founder"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Small Badge Overlay */}
            <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-white p-4 rounded-2xl shadow-xl border border-blue-50 animate-[float_4s_ease-in-out_infinite] hidden md:block">
              <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-[#E5F3FF] rounded-full flex items-center justify-center text-blue-600 text-xl font-bold border border-blue-200">
                   🩺
                 </div>
                 <div>
                   <p className="text-[#020d1f] font-black text-sm uppercase tracking-wider content-center">Certified</p>
                   <p className="text-gray-500 font-medium text-xs uppercase tracking-wide">Professional</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Side: Owner Info & Content */}
          <div className="flex flex-col justify-center">
             <div className="mb-6">
                <span className="inline-block py-1.5 px-4 rounded-full bg-[#E5F3FF] border border-[#B3DFFF] text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                  Meet The Founder
                </span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#020d1f] uppercase tracking-tight mb-2">Xyz</h2>
                <h3 className="text-xl font-medium text-[#38bdf8] uppercase tracking-wide">Registered Nurse</h3>
             </div>

             <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
               <p>
                 As the founder of <strong className="text-[#020d1f]">Revive IV Hydration</strong>, I believe that true wellness starts from within. With years of dedicated experience as a Registered Nurse, my mission has always been to provide compassionate, high-quality care that genuinely improves people&apos;s lives.
               </p>
               <p>
                 I created this service to bring hospital-grade hydration and tailored vitamin therapies directly to your doorstep. Whether you need to recover faster, boost your energy, or maintain your peak health, we are committed to delivering a safe and luxurious experience right in the comfort of your own space.
               </p>
               <p className="font-medium italic text-gray-500 border-l-4 border-blue-400 pl-4 py-1">
                 &quot;Your well-being is my ultimate priority. Let&apos;s revive your health together.&quot;
               </p>
             </div>
             
             {/* Signature or subtle design element */}
             <div className="mt-8 flex items-center gap-4">
                <div className="h-0.5 w-12 bg-blue-600"></div>
                <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Expert Care</div>
             </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </div>
  );
}
