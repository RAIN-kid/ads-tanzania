"use client"
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: "01",
    title: "Meta Ads Strategy",
    desc: "Tunatengeneza matangazo yanayolenga wateja wenye uwezo wa kununua, sio wapita njia. Ongeza mauzo yako kwa ROI kubwa bila kupoteza bajeti.",
    icon: "🎯",
    gradient: "from-blue-500 to-cyan-400",
    shadow: "shadow-blue-500/20"
  },
  {
    id: "02",
    title: "Account Recovery",
    desc: "Akaunti yako ya Facebook au IG imepigwa ban? Tunatatua matatizo ya 'Restricted Accounts' na kurudisha biashara yako hewani ndani ya muda mfupi.",
    icon: "🛡️",
    gradient: "from-red-500 to-orange-500",
    shadow: "shadow-red-500/20"
  },
  {
    id: "03",
    title: "1-on-1 Mentorship",
    desc: "Jifunze siri za Meta Ads kutoka kwa wataalamu. Tunakupa mbinu za vitendo za kukuza biashara yako mwenyewe au kuanza kupiga pesa kama freelancer.",
    icon: "🏆",
    gradient: "from-green-500 to-emerald-400",
    shadow: "shadow-green-500/20"
  }
];

// Animation Variants kwa ajili ya Kadi Kudondoka Moja Baada ya Nyingine
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, x: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

export default function Services() {
  return (
    // Background imerudi kwenye Off-White (#FAFBFF) ili kutofautiana na ile nyeupe ya About
    <section className="py-24 px-4 md:px-6 min-h-screen flex items-center bg-[#FAFBFF] relative overflow-hidden">
      
      {/* Background Orbs za mapambo */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-orange-200 rounded-full mix-blend-multiply filter blur-[150px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full relative z-10">
        
        {/* KUSHOTO: Maelezo na WhatsApp CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="flex flex-col justify-center text-center lg:text-left"
        >
          {/* Label ya Juu */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-extrabold text-gray-800 mb-6 mx-auto lg:mx-0 w-fit tracking-wide uppercase border border-gray-100 shadow-sm">
            <span className="w-2 h-2 bg-[#FF6B00] rounded-full"></span>
            Huduma Zetu Kuu
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Suluhisho La <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFA800]">
              Kila Changamoto
            </span> Yako.
          </h2>

          <p className="text-gray-500 text-base md:text-lg mb-10 font-medium leading-relaxed px-4 lg:px-0 max-w-lg">
            Sisi sio agency inayokupa ahadi hewa. Tunatumia data, uzoefu, na mikakati inayofanya kazi kukuza biashara yako. Chagua huduma inayoendana na uhitaji wako hapa chini tuanze kazi.
          </p>

          {/* THE UNIVERSAL WHATSAPP CTA */}
          <div className="flex justify-center lg:justify-start">
            <a href="https://wa.me/255674695549" className="relative group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full overflow-hidden shadow-[0_10px_30px_-10px_rgba(37,211,102,0.8)] hover:scale-105 transition-all duration-300">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 md:w-6 md:h-6 invert mr-2 md:mr-3" alt="WA" />
              <span className="text-sm md:text-base">WhatsApp Me Now</span>
            </a>
          </div>
        </motion.div>

        {/* KULIA: Kadi za Huduma (Services) zenye Staggered Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-6 w-full"
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white p-6 md:p-8 rounded-[30px] border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(255,107,0,0.15)] hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Namba Kubwa inayofifia kwa nyuma (Watermark) */}
              <div className="absolute -top-6 -right-4 text-[100px] font-black text-gray-50 opacity-50 group-hover:text-orange-50 transition-colors duration-300 pointer-events-none select-none">
                {service.id}
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Icon yenye Gradient */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl md:text-4xl text-white shadow-lg ${service.shadow} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Maelezo ya Huduma */}
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-[#FF6B00] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}