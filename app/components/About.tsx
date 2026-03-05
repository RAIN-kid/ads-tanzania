"use client"
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 px-4 md:px-6 min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        
        {/* KUSHOTO: Picha Inayoendana na Kazi (Mtandaoni) + Floating Notifications */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center items-center"
        >
          {/* Background Decorator */}
          <div className="absolute w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-tr from-orange-100 to-blue-50 rounded-[40px] rotate-6 opacity-60"></div>
          
          {/* Main Image Container (Picha ya Data/Marketing) */}
          <div className="relative z-10 w-[280px] md:w-[380px] h-[380px] md:h-[500px] bg-gray-50 rounded-[32px] overflow-hidden border-[4px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <img 
              src="data:image/png;base64,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" 
              alt="Digital Marketing Strategy" 
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            {/* Nakshi ya giza kwa juu ili picha ivutie */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Floating Card 1: THE PAIN (Account Restricted) */}
          <motion.div 
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute top-10 -left-6 md:-left-12 bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-2xl shadow-xl border border-red-100 flex items-center gap-3 z-20 w-[200px] md:w-[240px]"
          >
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500 font-bold text-lg shadow-inner">✕</div>
            <div>
              <p className="font-bold text-[12px] md:text-sm text-gray-900 leading-tight">Ad Account Restricted</p>
              <p className="text-[10px] md:text-xs text-red-500 font-medium">Meta Policy Violation</p>
            </div>
          </motion.div>

          {/* Floating Card 2: THE SOLUTION (Campaign Active) */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-16 -right-6 md:-right-12 bg-white/95 backdrop-blur-sm p-3 md:p-4 rounded-2xl shadow-xl border border-green-100 flex items-center gap-3 z-20 w-[190px] md:w-[230px]"
          >
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-500 font-bold text-lg shadow-inner">✓</div>
            <div>
              <p className="font-bold text-[12px] md:text-sm text-gray-900 leading-tight">Campaign Active</p>
              <p className="text-[10px] md:text-xs text-green-600 font-extrabold">ROI: +340% Sales</p>
            </div>
          </motion.div>
        </motion.div>


        {/* KULIA: Maelezo na WhatsApp CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          {/* Kijilebo cha juu */}
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-extrabold text-[#FF6B00] mb-6 mx-auto lg:mx-0 w-fit tracking-wide uppercase shadow-sm">
            Tatizo sio Soko. Tatizo ni Mkakati.
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Acha Kupoteza Pesa Kwenye Matangazo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFA800]">Yasiyolipa.</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg mb-8 font-medium leading-relaxed px-4 lg:px-0">
            Kupata "Likes" na "Followers" ni vizuri, lakini havilipi bili. Sisi tunalenga kitu kimoja tu: <strong className="text-gray-900">Kukuza Mauzo Yako</strong>. Iwe akaunti yako imefungiwa na Meta au matangazo yako hayaleti wateja, nina mikakati iliyothibitishwa kukupa matokeo.
          </p>

          {/* Bullet Points za Kijanja */}
          <div className="space-y-4 md:space-y-5 mb-10 px-4 lg:px-0">
            {[
              { title: "Meta Ads Strategy", desc: "Targeting ya uhakika kuwafikia wateja wenye pesa." },
              { title: "Account Recovery", desc: "Kurudisha akaunti zilizopigwa ban na Meta haraka." },
              { title: "Sustainable Scaling", desc: "Mbinu za kukuza biashara bila kutegemea bahati." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: 0.2 + (index * 0.15) }}
                className="flex items-start gap-4 text-left"
              >
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#FF6B00] font-black text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-base md:text-lg">{item.title}</h4>
                  <p className="text-sm md:text-base text-gray-500 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* THE UNIVERSAL WHATSAPP CTA */}
          <div className="flex justify-center lg:justify-start">
            <a href="https://wa.me/255674695549" className="relative group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] hover:scale-105 transition-all duration-300">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 md:w-6 md:h-6 invert mr-2 md:mr-3" alt="WA" />
              <span className="text-sm md:text-base">WhatsApp Me Now</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}