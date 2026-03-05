"use client"
import { motion } from 'framer-motion';

// Orodha ya aina za biashara anazofanya nazo kazi (Tumezirudia ili zi-scroll bila kukata)
const clientTypes = [
  { name: "E-Commerce Stores", icon: "🛍️" },
  { name: "Real Estate Agents", icon: "🏢" },
  { name: "Fashion Boutiques", icon: "👗" },
  { name: "Car Dealerships", icon: "🚗" },
  { name: "Public Figures", icon: "🌟" },
  { name: "Travel Agencies", icon: "✈️" },
  { name: "Restaurants & Cafes", icon: "🍔" },
  { name: "Tech Startups", icon: "🚀" }
];

// Tunachanganya array mara tatu ili itengeneze infinite loop ndefu isiyokata
const marqueeItems = [...clientTypes, ...clientTypes, ...clientTypes];

export default function TrustedBy() {
  return (
    // Hii section ni fupi tu (py-10) na inaunganisha Hero na About
    <section className="py-10 bg-[#FAFBFF] relative overflow-hidden flex flex-col items-center justify-center border-b border-gray-100/50">
      
      {/* Kijilebo cha Kuaminika */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[10px] md:text-xs font-extrabold text-gray-400 uppercase tracking-[0.2em] mb-8 text-center"
      >
        Trusted by 500+ Tanzanian Businesses
      </motion.p>

      {/* HII NDIO SIRI YA UNYAMA: Mask Image. 
        Inafifisha mwanzo na mwisho wa container ili kadi zisionekane zikikatika ghafla.
      */}
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden" 
           style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
        
        {/* Infinite Scroll Animation */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }} // Inatembea kutoka kulia kwenda kushoto
          transition={{ ease: "linear", duration: 35, repeat: Infinity }} // Inatembea taratibu na haisimami
          className="flex gap-4 md:gap-6 w-max px-4"
        >
          {marqueeItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-white px-5 py-2.5 md:px-6 md:py-3 rounded-full shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] border border-gray-100 
              grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,107,0,0.2)] transition-all duration-300 cursor-default"
            >
              <span className="text-lg md:text-xl">{item.icon}</span>
              <span className="font-extrabold text-[11px] md:text-sm text-gray-800 whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}