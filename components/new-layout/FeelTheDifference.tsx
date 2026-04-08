export default function FeelTheDifference() {
  const drips = [
    { 
      title: 'Liquid Gold', subtitle: 'Hangover Cure', desc: 'Replenish, rehydrate, and bounce back fast.',
      price: '$199', glow: 'from-amber-200/50', color: 'bg-amber-400', btnBorder: 'border-amber-400', btnText: 'text-amber-500', btnHover: 'hover:bg-amber-400',
      image: 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775689075/iv-1_jeczya.png' 
    },
    { 
      title: 'Revive Defense', subtitle: 'Immunity Drip', desc: 'Strengthen immunity and fight off what slows you down.',
      price: '$189', glow: 'from-green-200/50', color: 'bg-green-400', btnBorder: 'border-green-500', btnText: 'text-green-600', btnHover: 'hover:bg-green-500',
      image: 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775689199/iv-2_krwous.png' 
    },
    { 
      title: 'Beautify', subtitle: 'Beauty Drip', desc: 'Hydrate your skin, boost radiance, and glow from within.',
      price: '$220', glow: 'from-rose-200/50', color: 'bg-rose-400', btnBorder: 'border-rose-400', btnText: 'text-rose-500', btnHover: 'hover:bg-rose-400',
      image: 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775689282/iv-3_jibbl7.png' 
    },
    { 
      title: 'Revive Recovery', subtitle: 'Athletic Recovery', desc: 'Support muscle repair, reduce soreness, and recover faster.',
      price: '$179', glow: 'from-purple-200/50', color: 'bg-purple-400', btnBorder: 'border-purple-500', btnText: 'text-purple-600', btnHover: 'hover:bg-purple-500',
      image: 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775689412/iv-4_zi9cmk.png' 
    },
    { 
      title: 'All In One Revive', subtitle: 'Myers Cocktail', desc: 'The ultimate blend for total wellness, hydration, and balance.',
      price: '$250', glow: 'from-indigo-200/50', color: 'bg-indigo-400', btnBorder: 'border-indigo-400', btnText: 'text-indigo-500', btnHover: 'hover:bg-indigo-400',
      image: 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775689491/iv-5_xwryqq.png' 
    },
    { 
      title: 'Revive Calm', subtitle: 'Relax. Reset. Restore.', desc: 'Relax your mind, ease stress, and reset your body.',
      price: '$210', glow: 'from-purple-200/50', color: 'bg-purple-400', btnBorder: 'border-purple-400', btnText: 'text-purple-500', btnHover: 'hover:bg-purple-400',
      image: 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775689639/iv-6_qq22bj.png' 
    },
    { 
      title: 'Brain Focus', subtitle: 'NAD+ MENTAL CLARITY', desc: 'Sharpen your focus, boost mental clarity, stay on top of your game.',
      price: '$250', glow: 'from-cyan-200/50', color: 'bg-cyan-400', btnBorder: 'border-cyan-400', btnText: 'text-cyan-500', btnHover: 'hover:bg-cyan-400',
      image: 'https://res.cloudinary.com/dpcidympa/image/upload/q_auto/f_auto/v1775689968/iv-7_jcjr8k.png' 
    },
  ];

  return (
    <div id="our-drips" className="w-full bg-[#f4f7fb] py-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3 text-left">Choose Your Drip</div>
        <h2 className="text-5xl md:text-[3.5rem] font-black text-[#0A1628] mb-4 text-left font-display uppercase tracking-tighter" style={{ fontFamily: "var(--font-display)" }}>
          Feel The Difference.
        </h2>
        <p className="text-gray-500 mb-12 text-lg max-w-xl text-left">
          Seven targeted IV formulas — each designed to help you look, feel, and perform at your best, fast.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 xl:gap-4">
          {drips.map((drip, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className={`absolute top-0 inset-x-0 h-48 bg-gradient-to-b ${drip.glow} to-transparent z-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {drip.image ? (
                <div className="z-10 mb-4 mt-2 flex items-center justify-center h-44">
                  <img src={drip.image} alt={drip.title} className="max-h-full max-w-full object-contain drop-shadow-md" />
                </div>
              ) : (
                <div className="w-20 h-32 bg-[#e2edf6] rounded-xl z-10 mb-4 flex flex-col border border-white shadow-inner overflow-hidden relative mt-4">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-2 border-2 border-gray-300 rounded-t-sm" />
                  <div className={`w-full h-full mt-4 rounded-xl ${drip.color} opacity-80 backdrop-blur-md relative overflow-hidden flex items-end justify-center pb-2`}>
                     <div className="w-full h-3/4 bg-white/20 absolute bottom-0 left-0" />
                     <div className="text-[8px] font-bold text-white bg-black/20 px-2 py-0.5 rounded-full z-20">IV FLUID</div>
                  </div>
                </div>
              )}

              <div className="z-10 w-full text-left mt-2 flex-grow">
                <h3 className={`text-base font-black uppercase tracking-tighter leading-tight ${drip.btnText}`}>
                  {drip.title}
                </h3>
                <p className="text-[10px] text-gray-500 font-bold uppercase mt-1 mb-3 tracking-widest">{drip.subtitle}</p>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed font-medium">
                  {drip.desc}
                </p>
              </div>
              <button className={`z-10 mt-auto text-[11px] font-bold ${drip.btnText} bg-white w-full py-2.5 rounded-full ${drip.btnHover} hover:text-white transition-colors uppercase border ${drip.btnBorder}`}>
                Book This Drip
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
