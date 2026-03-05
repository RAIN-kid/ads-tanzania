import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy' // <--- Ingiza hapa
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#FAFBFF] overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy /> {/* <--- Iweke hapa, inafuata mara tu baada ya Hero */}
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}