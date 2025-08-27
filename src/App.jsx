import About from "./components/About"
import CallToAction from "./components/CallToAction"
import CertificationCategories from "./components/CertificationCategories"
import CertificationsSection from "./components/CertificationsSection"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import OurServices from "./components/OurServices"
import ProfessionalAccreditations from "./components/ProfessionalAccreditations"
import RecentProjects from "./components/RecentProjects"
import Testimonials from "./components/Testimonials"
import TrustedBy from "./components/TrustedBy"
import WhyChooseUs from "./components/WhyChooseUs"

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <OurServices />
      <About />
      <RecentProjects />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <ProfessionalAccreditations />
      <CertificationCategories />
      <CertificationsSection />
      <TrustedBy />
      <CallToAction />
      <Footer />
    </>
  )
}

export default App
