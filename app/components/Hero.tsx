"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const floatingBanners = [
  // Kushoto Juu: Inatokea kwa kuteleza kutoka kushoto (Slide from left)
  { 
    icon: "📈", title: "Increase Sales", subtitle: "Meta Ads Strategy", position: "top-24 -left-14 md:-left-28",
    initial: { opacity: 0, x: -50, rotate: -15 }, 
    whileInView: { opacity: 1, x: 0, rotate: 0 }, 
    delay: 0.6 
  },
  // Kushoto Chini: Ina-pop kutoka chini (Pop up)
  { 
    icon: "🛡️", title: "Account Recovery", subtitle: "Unlock Restrictions", position: "bottom-48 -left-10 md:-left-20",
    initial: { opacity: 0, y: 50, scale: 0.5 }, 
    whileInView: { opacity: 1, y: 0, scale: 1 }, 
    delay: 0.8 
  },
  // Kulia Juu: Inatokea kwa kuteleza kutoka kulia (Slide from right)
  { 
    icon: "🎯", title: "Targeted Ads", subtitle: "Reach Audience", position: "top-36 -right-12 md:-right-24",
    initial: { opacity: 0, x: 50, rotate: 15 }, 
    whileInView: { opacity: 1, x: 0, rotate: 0 }, 
    delay: 1.0 
  },
  // Kulia Chini: Inashuka kutoka juu na kuvimba (Drop and scale)
  { 
    icon: "🏆", title: "Mentorship", subtitle: "1-on-1 Training", position: "bottom-32 -right-8 md:-right-16",
    initial: { opacity: 0, scale: 0, y: -30 }, 
    whileInView: { opacity: 1, scale: 1, y: 0 }, 
    delay: 1.2 
  }
];

export default function Hero() {
  return (
    <section className="relative pt-[140px] md:pt-[160px] pb-10 px-4 md:px-6 min-h-[95vh] flex items-center justify-center bg-[#FAFBFF] overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full z-10 relative">
        
        {/* UPANDE WA MAANDISHI (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }} /* once: false inaruhusu ijirudie kila ukiscroll */
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left flex flex-col justify-center h-full mt-4 md:mt-0"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-gray-100 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold text-gray-800 shadow-sm mb-6 mx-auto lg:mx-0 w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Tanzania's #1 Digital Expert
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tighter">
            Elevate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFA800]">
              Digital Growth.
            </span>
          </h1>

          <p className="text-gray-500 text-base md:text-lg mb-8 max-w-md mx-auto lg:mx-0 font-medium leading-relaxed px-4 md:px-0">
            Sharing actionable insights & proven strategies for sustainable business scaling. Sio followers, tunatafuta wateja.
          </p>

          {/* WhatsApp CTA */}
          <div className="flex justify-center lg:justify-start">
            <a href="https://wa.me/255674695549" className="relative group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] hover:scale-105 transition-all duration-300">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 md:w-6 md:h-6 invert mr-2 md:mr-3" alt="WA" />
              <span className="text-sm md:text-base">WhatsApp Me Now</span>
            </a>
          </div>
        </motion.div>

        {/* UPANDE WA SIMU NA BANNERS (Right Side) */}
        <div className="relative flex justify-center items-start lg:mt-0 mt-16 pb-10" style={{ perspective: "1200px" }}> 
          {/* perspective: 1200px inaruhusu ile 3D Flip ionekane vizuri sana */}
          
          {/* Container Kuu inayoshikilia Simu na Banners */}
          <div className="relative w-[260px] sm:w-[280px] md:w-[320px]">
            
            {/* 1. SIMU PEKEE (Na 3D Flip Effect) */}
            <motion.div 
              initial={{ rotateY: -90, opacity: 0, scale: 0.8 }} // Inaanza imegeukia pembeni na kufichwa
              whileInView={{ rotateY: 0, opacity: 1, scale: 1 }} // Inarudi usawa uki-scroll
              viewport={{ once: false, amount: 0.3 }} // Inarudia ukiscroll
              transition={{ duration: 1.2, type: "spring", bounce: 0.4 }} // Bounce inafanya ionekane kama ina uzito halisi
              className="relative z-10 w-full"
              style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}
            >
              {/* iPhone Frame Nyeupe */}
              <div className="bg-[#F5F5F7] rounded-[40px] md:rounded-[50px] p-2 md:p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] border-[2px] md:border-[3px] border-gray-200">
                
                {/* Dynamic Island */}
                <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 w-[70px] md:w-[80px] h-[20px] md:h-[22px] bg-black rounded-full z-50 flex items-center justify-end px-2 shadow-inner">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1A1A1A] rounded-full border border-[#333]"></div>
                </div>

                {/* Screen ya Ndani */}
                <div className="bg-white rounded-[30px] md:rounded-[40px] overflow-hidden h-[480px] md:h-[550px] relative pt-8 md:pt-9">
                  <div className="flex justify-between items-center p-2.5 md:p-3 border-b border-gray-50">
                    <div className="flex items-center gap-2">
                      <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden border border-gray-200">
                        <Image src="/images/adsman.png" alt="Profile" fill className="rounded-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] md:text-xs font-bold leading-tight flex items-center gap-1">
                          sponsored_ads_tanzania <span className="text-blue-500 text-[8px] md:text-[10px]">✔</span>
                        </p>
                        <p className="text-[8px] md:text-[10px] text-gray-400">Sponsored</p>
                      </div>
                    </div>
                    <p className="font-bold text-gray-400 text-xs md:text-sm">•••</p>
                  </div>

                  {/* IG Post Image */}
                  <div className="relative w-full h-[260px] md:h-[320px] bg-gray-50 flex items-center justify-center">
                    <Image src="/images/adsman.png" alt="Post Image" fill className="object-cover" />
                  </div>

                  {/* IG Post Actions */}
                  <div className="p-2.5 md:p-3">
                    <div className="flex gap-2.5 md:gap-3 mb-2">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-red-500 hover:scale-110 transition-transform cursor-pointer" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                    </div>
                    <p className="text-[10px] md:text-xs font-bold mb-1">Liked by bazilipk1 and 111K others</p>
                    <p className="text-[10px] md:text-xs text-gray-800">
                      <span className="font-bold mr-1">sponsored_ads_tanzania</span> 
                      Kukuza biashara... <span className="text-gray-400">more</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. BANNERS (Zinakuja kwa Style tofauti na kwa kupishana muda) */}
            {floatingBanners.map((banner, index) => (
              <motion.div 
                key={index}
                initial={banner.initial} // Tunasoma style ya mwanzo kutoka kwenye array
                whileInView={banner.whileInView} // Tunasoma style ya mwisho
                viewport={{ once: false, amount: 0.5 }} // Inasubiri simu igeuke ndio zianze
                transition={{ duration: 0.6, type: "spring", bounce: 0.5, delay: banner.delay }} // Zinalipuka zikifika
                className={`absolute ${banner.position} bg-white/95 backdrop-blur-xl p-2 md:p-3 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.12)] border border-white flex items-center gap-2 z-30 w-[130px] sm:w-[150px] md:w-[180px] hover:-translate-y-1 transition-transform`}
              >
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 min-w-[32px] w-8 h-8 md:min-w-[40px] md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base shadow-sm border border-white/50">{banner.icon}</div>
                <div className="overflow-hidden">
                  <p className="font-extrabold text-[10px] md:text-[13px] text-gray-900 leading-tight truncate">{banner.title}</p>
                  <p className="text-[8px] md:text-[10px] text-gray-500 font-semibold truncate">{banner.subtitle}</p>
                </div>
              </motion.div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
}