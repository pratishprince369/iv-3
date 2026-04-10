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
            <iframe width="100%" height="650" src="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=01389c02584758d12e92e9396b7eb77f180cec49f3ab362ab2267a8fddc4c6206ee57013c1a537e6aa69605fce4db66ad95fcbc3b76e32a2" style={{ border: 'none' }} frameBorder="0"></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}
