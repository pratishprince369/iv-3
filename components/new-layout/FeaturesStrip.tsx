import { MapPin, Calendar, Droplets, Sparkles } from 'lucide-react';

export default function FeaturesStrip() {
  return (
    <div className="w-full bg-[#f4f7fb] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center justify-center p-4 bg-[#e2edf6] rounded-full text-[#1b3a57] font-semibold text-sm sm:text-base">
            <span className="bg-white p-2 rounded-full mr-3 shadow-sm">
              <MapPin className="w-5 h-5 text-blue-500" />
            </span>
            On Demand IV Therapy
          </div>
          <div className="flex items-center justify-center p-4 bg-[#e2edf6] rounded-full text-[#1b3a57] font-semibold text-sm sm:text-base">
            <span className="bg-white p-2 rounded-full mr-3 shadow-sm">
              <Calendar className="w-5 h-5 text-blue-500" />
            </span>
            Book Your Session
          </div>
          <div className="flex items-center justify-center p-4 bg-[#e2edf6] rounded-full text-[#1b3a57] font-semibold text-sm sm:text-base">
            <span className="bg-white p-2 rounded-full mr-3 shadow-sm">
              <Droplets className="w-5 h-5 text-blue-500" />
            </span>
            Get Replenished
          </div>
          <div className="flex items-center justify-center p-4 bg-[#e2edf6] rounded-full text-[#1b3a57] font-semibold text-sm sm:text-base">
            <span className="bg-white p-2 rounded-full mr-3 shadow-sm">
              <Sparkles className="w-5 h-5 text-blue-500" />
            </span>
            Feel Rejuvenated
          </div>
        </div>
      </div>
    </div>
  );
}
