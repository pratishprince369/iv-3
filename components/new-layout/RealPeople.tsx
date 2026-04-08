import { Star, ShieldCheck } from 'lucide-react';

export default function RealPeople() {
  const reviews = [
    { name: 'Sarah M.', text: 'Absolutely amazing! The nurse was incredibly professional, and I felt immediately better after the immunity drip. Will be booking again next month.', rating: 5 },
    { name: 'Michael T.', text: 'Game changer for hangovers. I was struggling after a bachelor party and this brought me back to life in 45 minutes.', rating: 5 },
    { name: 'Jessica R.', text: 'I get the Myers Cocktail once a month and my energy levels have never been better. The process is completely painless and so convenient.', rating: 5 },
    { name: 'David L.', text: 'Highly recommend! I was recovering from a flu and the hydration and vitamins really sped up my recovery.', rating: 4 },
  ];

  return (
    <div id="reviews" className="w-full bg-[#f4f7fb] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#020d1f] tracking-tight mb-2 uppercase">Real People. Real Results.</h2>
        <div className="flex items-center space-x-2 text-lg text-gray-500 mb-12">
           <span className="text-blue-600 font-bold text-2xl">4.8</span>
           <div className="flex text-yellow-400">
             <Star className="w-5 h-5 fill-current" />
             <Star className="w-5 h-5 fill-current" />
             <Star className="w-5 h-5 fill-current" />
             <Star className="w-5 h-5 fill-current" />
             <Star className="w-5 h-5 fill-current text-gray-300" />
           </div>
           <span>based on 179+ reviews</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-200 fill-current'}`} />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">&quot;{review.text}&quot;</p>
              <div className="flex items-center space-x-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-[#020d1f] font-bold text-sm">{review.name}</h4>
                  <div className="flex items-center text-blue-600 text-xs font-semibold">
                    <ShieldCheck className="w-3 h-3 mr-1" /> Verified
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
