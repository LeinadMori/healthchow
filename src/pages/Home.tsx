import Hero from "../components/Hero";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About /> {/* 👈 Add this so the About section displays below the hero */}
      <Contact />
      <Footer /> 

    </>
  );
};

export default Home;

