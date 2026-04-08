import { Pickaxe, CalendarCheck, Truck, HeartPulse } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Pick Your Drip',
      description: 'Select a therapy tailored to your needs from our extensive menu.',
      icon: <Pickaxe className="w-6 h-6 text-blue-500" />
    },
    {
      number: '02',
      title: 'Book Session',
      description: 'Pick your time and place – home, hotel, or office.',
      icon: <CalendarCheck className="w-6 h-6 text-blue-500" />
    },
    {
      number: '03',
      title: 'We Arrive',
      description: 'A registered nurse comes directly to you with all equipment.',
      icon: <Truck className="w-6 h-6 text-blue-500" />
    },
    {
      number: '04',
      title: 'Feel Better',
      description: 'Relax while we administer your drip and start feeling like yourself again.',
      icon: <HeartPulse className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="w-full bg-[#f4f7fb] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#020d1f] tracking-tight mb-2 uppercase">How It Works</h2>
        <p className="text-gray-500 mb-12 text-lg">Simple, speedy, stress-free process.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow">
              <span className="text-blue-100 text-5xl font-black mb-4">{step.number}</span>
              <div className="bg-blue-50 p-3 rounded-xl mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#020d1f] mb-3 uppercase tracking-wide">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
