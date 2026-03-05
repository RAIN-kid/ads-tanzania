"use client"
import { motion } from 'framer-motion';

// Hizi ni feedback za mfano (Zinakopi uhalisia wa kile anachokifanya)
const feedbacks = [
  {
    name: "Aisha (Boutique Owner)",
    message: "Kaka tangu uanze kusimamia ads zangu mauzo yamepanda hatari! Nilikuwa napata likes tu mwanzo, sasa hivi WhatsApp haipoi. 🙏🏾",
    time: "10:42 AM",
    type: "received"
  },
  {
    name: "Juma (Real Estate)",
    message: "Bro, nilijua nimeshapoteza biashara yangu baada ya Meta kupiga ban ad account. Nashukuru kwa kuirudisha hewani ndani ya masaa 24. Uko vizuri!",
    time: "14:15 PM",
    type: "received"
  },
  {
    name: "Sarah (Freelancer)",
    message: "Mentorship yako imebadilisha maisha yangu. Jana nime-close client wangu wa kwanza wa Meta Ads kwa mbinu ulizonifundisha. 🚀🔥",
    time: "09:30 AM",
    type: "received"
  },
  {
    name: "Baraka (Electronics)",
    message: "ROAS (Return on Ad Spend) imesoma 4.5X mwezi huu. Mkakati wako wa retargeting unafanya maajabu sana mkuu.",
    time: "16:20 PM",
    type: "received"
  }
];

export default function Testimonials() {
  return (
    // Background Nyeupe ili kutofautiana na ile Off-White ya Services
    <section className="py-24 px-4 md:px-6 min-h-screen flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
        
        {/* KUSHOTO: Simu Inayo-Scroll Meseji (Dynamic Social Proof) */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative flex justify-center items-center h-[600px]"
        >
          {/* Background Glow ya Simu */}
          <div className="absolute w-[300px] h-[300px] bg-green-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
          
          {/* iPhone 15 Pro Frame (Kama ile ya Hero) */}
          <div className="relative z-10 w-[280px] md:w-[320px] bg-[#F5F5F7] rounded-[50px] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[3px] border-gray-200">
            
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-[22px] bg-black rounded-full z-50 flex items-center justify-end px-2.5 shadow-inner">
              <div className="w-2 h-2 bg-[#1A1A1A] rounded-full border border-[#333]"></div>
            </div>

            {/* Screen ya Ndani (WhatsApp Style Feed) */}
            <div className="bg-[#EFEAE2] rounded-[40px] overflow-hidden h-[550px] relative pt-12 flex flex-col">
              
              {/* Chat Header */}
              <div className="bg-[#008069] p-3 flex items-center gap-3 text-white shadow-md z-20 absolute top-0 left-0 w-full pt-10">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">SA</div>
                <div>
                  <p className="font-bold text-sm leading-tight">Client Feedbacks 🌟</p>
                  <p className="text-[10px] text-white/80">Tap here for contact info</p>
                </div>
              </div>

              {/* Chat Messages (Zina-Scroll kwa Framer Motion) */}
              <div className="flex-1 overflow-hidden relative mt-12 px-3 pb-4">
                <motion.div 
                  animate={{ y: ["0%", "-50%"] }} // Inascroll kwenda juu
                  transition={{ ease: "linear", duration: 20, repeat: Infinity }} // Infinite loop
                  className="flex flex-col gap-4 pt-4"
                >
                  {/* Tinarudia list mara mbili ili scroll iwe continuous (Isikatike) */}
                  {[...feedbacks, ...feedbacks].map((chat, index) => (
                    <div key={index} className="flex flex-col items-start w-[90%]">
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 relative">
                        {/* Jina la Mteja */}
                        <p className="text-[10px] font-extrabold text-[#008069] mb-1">{chat.name}</p>
                        {/* Meseji Yenyewe */}
                        <p className="text-xs text-gray-800 leading-relaxed font-medium">{chat.message}</p>
                        {/* Muda */}
                        <p className="text-[9px] text-gray-400 text-right mt-1">{chat.time}</p>
                        
                        {/* Kijimkia cha Chat Bubble */}
                        <div className="absolute top-0 -left-2 w-4 h-4 bg-white" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Gradient Masks za kufifisha meseji juu na chini */}
                <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#EFEAE2] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#EFEAE2] to-transparent z-10 pointer-events-none"></div>
              </div>
              
              {/* Chat Input Mockup */}
              <div className="bg-[#F0F2F5] p-2 flex items-center gap-2 z-20 relative">
                <div className="bg-white rounded-full h-8 flex-1 px-3 flex items-center text-[10px] text-gray-400">Type a message</div>
                <div className="w-8 h-8 bg-[#008069] rounded-full flex items-center justify-center text-white">
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                </div>
              </div>

            </div>
          </div>
        </motion.div>


        {/* KULIA: Maelezo (The Proof Text) */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          {/* Label ya Juu */}
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-extrabold text-[#008069] mb-6 mx-auto lg:mx-0 w-fit tracking-wide uppercase shadow-sm">
            <span className="text-lg leading-none">🤝</span>
            Usiamini Maneno Yetu
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Sikiliza Kile Wateja Wetu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008069] to-[#25D366]">Wanasema.</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg mb-8 font-medium leading-relaxed px-4 lg:px-0 max-w-lg">
            Matokeo yanaongea kwa sauti kuliko ahadi. Tumewasaidia wafanyabiashara mamia Tanzania kukuza mauzo na kuokoa akaunti zao. Hizi sio hadithi, ni hali halisi zinazotokea kila siku kwenye DM yetu.
          </p>

          {/* THE UNIVERSAL WHATSAPP CTA */}
          <div className="flex justify-center lg:justify-start">
            <a href="https://wa.me/255674695549" className="relative group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] hover:scale-105 transition-all duration-300">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 md:w-6 md:h-6 invert mr-2 md:mr-3" alt="WA" />
              <span className="text-sm md:text-base">Join Our Happy Clients</span>
            </a>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-100 pt-8">
            <div>
              <p className="text-3xl font-black text-gray-900">111K+</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">IG Followers</p>
            </div>
            <div className="w-px h-10 bg-gray-200"></div>
            <div>
              <p className="text-3xl font-black text-gray-900">98%</p>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Success Rate</p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}