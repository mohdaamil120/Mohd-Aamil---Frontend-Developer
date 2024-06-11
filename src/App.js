
import './App.css';
import About from './Components/About';
import Banner from './Components/Banner';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import MidSection from './Components/MidSection';
import Roadmap from './Components/Roadmap';
import Tokenomics from './Components/Tokenomics';

function App() {
  return (
    <>
      <Hero/>
      <MidSection/>
      <About/>
      <Banner/>
      <Features/>
      <Tokenomics/>
      <Roadmap/>
      <Footer/>
    </>
  );
}

export default App;
