import { useState, useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Section1 from "./components/section1";

function App() {
  const [state, setState] = useState(1); // Header visible by default

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.scrollY;
      setState(scrollPosition > 1500 ? 0 : 1); // Hide header when scrolled down
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <>
      {state > 0 && <Header />}
      <Hero />
      <Section1 />
      <Footer />
    </>
  );
}

export default App;