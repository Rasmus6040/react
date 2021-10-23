import '../App.css';
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import WhyMe from '../components/WhyMe';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import ScriptTag from "react-script-tag";

function Welcome() {
  return(
    <>
      <Navbar/>
      <Intro/>
      <WhyMe/>
      <AboutMe/>
      <Contact/>
      <ScriptTag type="text/javascript" src="./ValThorens/sketch.js"/>
    </>
  )
}

export default Welcome;