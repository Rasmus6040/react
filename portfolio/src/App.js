import './App.css';
import './menu.css';
import Welcome from './pages/Welcome/Welcome';
import Portfolio from './pages/Portfolio/Portfolio';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CV from './pages/CV/CV';


function App() {
  return(
    <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/CV">
            <CV/>
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
        <Contact/>
      </Router>
  )
}

export default App;
