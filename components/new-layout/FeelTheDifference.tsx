export default function FeelTheDifference() {
  const drips = [
    { title: 'Immunity', subtitle: 'Boost Defenses', price: '$199', glow: 'from-amber-200/50', color: 'bg-amber-400' },
    { title: 'Energy', subtitle: 'Recharge Focus', price: '$189', glow: 'from-green-200/50', color: 'bg-green-400' },
    { title: 'Recovery', subtitle: 'Bounce Back', price: '$220', glow: 'from-rose-200/50', color: 'bg-rose-400' },
    { title: 'Hangover', subtitle: 'Fast Relief', price: '$179', glow: 'from-purple-200/50', color: 'bg-purple-400' },
    { title: 'Myers Cocktail', subtitle: 'The Gold Standard', price: '$250', glow: 'from-indigo-200/50', color: 'bg-indigo-400' },
    { title: 'Inner Beauty', subtitle: 'Glow Up', price: '$210', glow: 'from-fuchsia-200/50', color: 'bg-fuchsia-400' },
  ];

  return (
    <div className="w-full bg-[#f4f7fb] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#020d1f] tracking-tight mb-2 uppercase">Feel The Difference.</h2>
        <p className="text-gray-500 mb-12 text-lg">Our most popular IV drip therapies.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {drips.map((drip, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 flex flex-col items-center relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${drip.glow} to-transparent z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="w-24 h-36 bg-[#e2edf6] rounded-xl z-10 mb-6 flex flex-col border border-white shadow-inner overflow-hidden relative mt-4">
                {/* Simulated IV Bag */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 border-2 border-gray-300 rounded-t-sm" />
                <div className={`w-full h-full mt-4 rounded-xl ${drip.color} opacity-80 backdrop-blur-md relative overflow-hidden flex items-end justify-center pb-2`}>
                   <div className="w-full h-3/4 bg-white/20 absolute bottom-0 left-0" />
                   <div className="text-[10px] font-bold text-white bg-black/20 px-2 py-0.5 rounded-full z-20">IV FLUID</div>
                </div>
              </div>

              <div className="z-10 w-full text-center mt-2 flex-grow">
                <h3 className="text-lg font-black text-[#020d1f] uppercase tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">{drip.title}</h3>
                <p className="text-xs text-gray-500 font-medium uppercase mt-1 mb-3">{drip.subtitle}</p>
                <div className={`h-1 w-full rounded-full ${drip.color} mb-4 opacity-50`} />
              </div>
              <button className="z-10 mt-auto text-xs font-bold text-blue-600 bg-blue-50 w-full py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-colors uppercase border border-blue-100">
                Book This Drip
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
