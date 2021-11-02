import '../../App.css';
import Intro from './Intro';
import AboutMe from './AboutMe';
import WhyMe from './WhyMe';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';

function Welcome() {
  return(
    <>
      <Navbar/>
      <Intro/>
      <WhyMe/>
      <AboutMe/>
      <Contact/>
    </>
  )
}

export default Welcome;