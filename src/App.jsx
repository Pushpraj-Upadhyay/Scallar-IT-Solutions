import "./App.css";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";
import FeedbackForm from "./components/FeedbackForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <AboutUs/>
      <Services/>
      <Projects/>
      <Blogs/>
      <Team/>
      <Testimonials />
      <FeedbackForm/>
      <Footer />
    </>
  );
}

export default App;
