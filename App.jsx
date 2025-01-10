import Banner from "./components/Banner"
import Contact from "./components/Contact"
import FactCounter from "./components/FactCounter"
import Footer1 from "./components/Footer1"
import Footer2 from "./components/Footer2"
import Footer3 from "./components/Footer3"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
import Testimonial from "./components/Testimonial"
import Vedio from "./components/Vedio"
import "slick-carousel/slick/slick.css"; 


function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Service/>
    <FactCounter/>
    <Vedio/>
    <Testimonial/>
    <Form/>
    <Contact/>
    <Footer1/>
    <Footer2/>
    <Footer3/>
    </>
  )
}

export default App
