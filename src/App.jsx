import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import About from './components/About'
import Pricing from './components/Pricing'
import IntakeBanner from './components/IntakeBanner'
import Locations from './components/Locations'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Pricing />
      <IntakeBanner />
      <Locations />
      <Contact />
      <Footer />
    </div>
  )
}
