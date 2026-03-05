export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-6 py-4 flex justify-between items-center transition-all">
      {/* Brand */}
      <div className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
        <span className="w-8 h-8 bg-gradient-to-br from-[#FF6B00] to-[#FF9E5E] rounded-full flex items-center justify-center text-white text-xs">SA</span>
        SponsoredAds.
      </div>
      
      {/* Links (Zimefichwa kwenye simu, zinaonekana PC) */}
      <div className="hidden md:flex gap-8 font-bold text-gray-600 text-sm">
        <a href="#" className="text-black hover:text-[#FF6B00] transition-colors">Home</a>
        <a href="#" className="hover:text-[#FF6B00] transition-colors">About</a>
        <a href="#" className="hover:text-[#FF6B00] transition-colors">Services</a>
        <a href="#" className="hover:text-[#FF6B00] transition-colors">Testimonials</a>
      </div>

      {/* Button Ndogo ya Kijanja */}
      <a 
        href="https://wa.me/255674695549" 
        target="_blank"
        className="bg-gradient-to-br from-[#FF6B00] to-[#FF9E5E] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg"
      >
        Let's Talk
      </a>
    </nav>
  );
}