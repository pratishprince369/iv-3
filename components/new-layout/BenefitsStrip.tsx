import { Heart, Zap, ShieldCheck, Lock, MapPin } from 'lucide-react';

export default function BenefitsStrip() {
  const benefits = [
    {
      icon: <Heart className="w-5 h-5 text-blue-500" />,
      title: "100% Absorption",
      subtitle: "vs 50% oral supplements",
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "Results in 30-45 min",
      subtitle: "Feel the difference fast",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      title: "Licensed Medical Team",
      subtitle: "RNs & Paramedics only",
    },
    {
      icon: <Lock className="w-5 h-5 text-blue-500" />,
      title: "HIPAA Compliant",
      subtitle: "Your privacy protected",
    },
    {
      icon: <MapPin className="w-5 h-5 text-blue-500" />,
      title: "All 5 NYC Boroughs",
      subtitle: "We come to your location",
    },
  ];

  return (
    <div className="w-full bg-[#f0f8fd] border-y border-blue-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-start lg:justify-between gap-6 lg:gap-4 overflow-x-auto no-scrollbar pb-2 pt-1 lg:py-0 w-full">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#020d1f] tracking-tight">{item.title}</span>
                <span className="text-[11px] text-gray-500 font-medium">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
