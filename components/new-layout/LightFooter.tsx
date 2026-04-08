export default function LightFooter() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-black text-blue-600 tracking-tighter mb-4">AMARA<span className="text-yellow-500">GOLD</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Premium mobile IV hydration therapy delivered directly to your door by certified professionals.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wide py-3 px-6 rounded-full transition-colors">
              Book Now
            </button>
          </div>

          <div>
            <h4 className="text-[#020d1f] font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Immunity Drip</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Energy Boost</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Hangover Rescue</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Myers Cocktail</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">NAD+ Therapy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#020d1f] font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#020d1f] font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>Call: (555) 123-4567</li>
              <li>Email: info@amarainv.com</li>
              <li>Hours: Mon-Sun 8am - 8pm</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} Amara Gold IV Therapy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
