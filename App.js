
import { useEffect } from 'react';
import AboutUs from './AboutUs';
import './App.css';
import EventsMomentum from './EventsMomentum';
import FAQs from './FAQs';
import Footer from './Footer';
import HomePage from './HomePage';
import Sponsors from './Sponsors';
import Aos from 'aos';

function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      <HomePage></HomePage>
      <div className="bodyWrapper" id='bodyWrapper'>
        <AboutUs></AboutUs>
        <EventsMomentum></EventsMomentum>
        <Sponsors></Sponsors>
        <FAQs></FAQs>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
