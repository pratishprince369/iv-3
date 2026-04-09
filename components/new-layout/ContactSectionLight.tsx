import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

export default function ContactSectionLight() {
  return (
    <div className="w-full bg-white py-20 pb-24" id="contact-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
           <h2 className="text-4xl lg:text-5xl font-black text-[#020d1f] tracking-tight uppercase">Contact <span className="text-blue-600">Us</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Contact Details */}
          <div className="space-y-10">
            
            <div className="space-y-6">


              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-600 mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Mobile</h4>
                  <p className="text-lg text-[#020d1f] font-medium">+1 813-709-3698</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email ID</h4>
                  <p className="text-lg text-[#020d1f] font-medium">info@reviveivdrip.io</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
               <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h4>
               <div className="flex space-x-4">
                 <a href="#" className="w-12 h-12 rounded-full bg-[#f4f7fb] flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors border border-gray-100 shadow-sm" aria-label="Facebook">
                   <Facebook className="w-5 h-5" />
                 </a>
                 <a href="https://www.instagram.com/revivesanctuary?igsh=MzU3Y2sycTd3cnk0" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#f4f7fb] flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors border border-gray-100 shadow-sm" aria-label="Instagram">
                   <Instagram className="w-5 h-5" />
                 </a>
                 <a href="#" className="w-12 h-12 rounded-full bg-[#f4f7fb] flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors border border-gray-100 shadow-sm" aria-label="TikTok">
                   {/* TikTok Icon */}
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                     <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                   </svg>
                 </a>
               </div>
            </div>

          </div>

          {/* Right Side: Google Map */}
          <div className="h-[400px] w-full rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 relative bg-[#f4f7fb]">
            <iframe 
              src="https://maps.google.com/maps?q=Toronto,%20Canada&t=&z=12&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
