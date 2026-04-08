import { CheckCircle2 } from 'lucide-react';

export default function BookYourIVDrip() {
  const benefits = [
    "100% Absorption Rate",
    "Fast-Acting Hydration",
    "Customizable to Your Needs",
    "Registered Nurses Administered",
    "Convenient At-Home Service"
  ];

  return (
    <div className="w-full bg-[#ebeff5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black text-[#020d1f] tracking-tight mb-4 uppercase">Book Your<br/><span className="text-blue-600">IV Drip</span></h2>
            <p className="text-gray-500 mb-8 text-lg">Choose from our extensive menu and schedule your session at your location.</p>
            
            <h3 className="text-xl font-bold text-[#020d1f] mb-6 uppercase tracking-wide">Why choose Amara IV Therapy?</h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-center text-gray-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl font-black text-[#020d1f] mb-8 uppercase tracking-wide">Book Your Session</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#f4f7fb] border border-gray-200 rounded-xl px-4 py-3 text-[#020d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#f4f7fb] border border-gray-200 rounded-xl px-4 py-3 text-[#020d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#f4f7fb] border border-gray-200 rounded-xl px-4 py-3 text-[#020d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                <input type="tel" className="w-full bg-[#f4f7fb] border border-gray-200 rounded-xl px-4 py-3 text-[#020d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Select Service</label>
                <select className="w-full bg-[#f4f7fb] border border-gray-200 rounded-xl px-4 py-3 text-[#020d1f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium appearance-none">
                  <option>Immunity Drip</option>
                  <option>Energy Boost</option>
                  <option>Hangover Recovery</option>
                  <option>Myers Cocktail</option>
                  <option>Inner Beauty</option>
                </select>
              </div>

              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wide py-4 rounded-xl transition-colors mt-4">
                Confirm Booking Request
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
