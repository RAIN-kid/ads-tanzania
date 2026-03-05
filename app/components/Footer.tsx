"use client"
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <div className="relative mt-20">
      
      {/* INFINITE MARQUEE (Maneno Makubwa Yanayokimbia kwa Nyuma) */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden whitespace-nowrap z-0 opacity-5 pointer-events-none">
        <motion.div 
          animate={{ x: [0, -2000] }} 
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex gap-10"
        >
          {[...Array(4)].map((_, i) => (
            <h1 key={i} className="text-[120px] font-black uppercase text-transparent stroke-text" style={{ WebkitTextStroke: '2px black' }}>
              GET MORE SALES • RECOVER ACCOUNT • SCALE FAST • 
            </h1>
          ))}
        </motion.div>
      </div>

      {/* THE OVERLAPPING FINAL CTA (Kadi Nyeusi Inayoelea) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 translate-y-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-[#0A0A0A] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-gray-800"
        >
          {/* Glow Effect Ndani ya Kadi */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#FF6B00] to-orange-400 rounded-full mix-blend-screen filter blur-[120px] opacity-40 pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6 relative z-10 tracking-tight">
            Uko Tayari Kuikuza <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFA800]">Biashara Yako?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Acha kupoteza muda na bajeti kwenye mikakati isiyofanya kazi. Tuma ujumbe sasa hivi, tukufanyie uchambuzi (audit) wa akaunti yako bure.
          </p>
          
          <a href="https://wa.me/255674695549" className="relative group inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 font-black text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full overflow-hidden shadow-[0_10px_40px_-10px_rgba(37,211,102,0.8)] hover:scale-105 transition-all duration-300 z-10">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-64 group-hover:h-56 opacity-20"></span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert mr-3" alt="WA" />
            <span className="text-lg uppercase tracking-wide">Piga Hatua Sasa</span>
          </a>
        </motion.div>
      </div>

      {/* THE BEEFY FOOTER (Unyama wa Chini) */}
      <footer className="bg-[#050505] pt-40 pb-12 px-6 border-t border-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Grid ya Footer (Nguzo 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Nguzo 1: Brand Info */}
            <div className="space-y-6">
              <div className="text-2xl font-black text-white tracking-tighter flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-br from-[#FF6B00] to-[#FF9E5E] rounded-full flex items-center justify-center text-white text-xs">SA</span>
                SponsoredAds.
              </div>
              <p className="text-gray-400 text-sm leading-relaxed pr-4">
                The most trusted digital marketing platform in Tanzania. Tunasaidia wafanyabiashara kukuza mauzo na kuokoa ad accounts zao.
              </p>
            </div>

            {/* Nguzo 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Client Feedbacks</a></li>
              </ul>
            </div>

            {/* Nguzo 3: Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Mawasiliano</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <span className="text-[#FF6B00]">📍</span> Dar es Salaam, Tanzania
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF6B00]">📞</span> +255 674 695 549
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#FF6B00]">✉️</span> hello@sponsoredads.co.tz
                </li>
              </ul>
            </div>

            {/* Nguzo 4: Follow Us (Icons Zinazowaka) */}
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Tufuatilie Mtandaoni</h4>
              <p className="text-gray-400 text-sm mb-6">Pata madini ya bure kila siku kupitia kurasa zetu.</p>
              
              <div className="flex gap-4">
                {/* Instagram (Hover: Pink/Purple Glow) */}
                <a href="https://instagram.com/sponsored_ads_tanzania" target="_blank" className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/></svg>
                </a>
                
                {/* YouTube (Hover: Red Glow) */}
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:scale-110 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>

                {/* Facebook (Hover: Blue Glow) */}
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1877F2] hover:scale-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.5)] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                {/* TikTok (Hover: Black/Cyan/Pink Glow) */}
                <a href="#" className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-black hover:scale-110 hover:shadow-[2px_2px_0_#00f2fe,-2px_-2px_0_#fe0979] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-medium">
              © {new Date().getFullYear()} Sponsored Ads Tanzania. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500 font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}