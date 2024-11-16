import Features from "./Features"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Services from "./Services" 
import Testimonials from "./Testimonial"
import Welcome from "./Welcome"


function App() {
 
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero    />
      <Welcome id="/about" /> 
      <Services id="/services"/>
      <Features id="/features" />
      <Testimonials />
      <Footer id="/contact"/> 
     
      
    </div>
  )
}

export default App
