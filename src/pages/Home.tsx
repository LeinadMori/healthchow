import Hero from "../components/Hero";
import About from "../pages/About";

const Home = () => {
  return (
    <>
      <Hero />
      <About /> {/* 👈 Add this so the About section displays below the hero */}
    </>
  );
};

export default Home;

