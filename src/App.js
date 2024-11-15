import "./App.css";
import IntroPage from "./components/IntroPage";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <IntroPage />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

/*

import { Link } from 'react-scroll';

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="section1" smooth={true} duration={500}>Section 1</Link>
          <Link to="section2" smooth={true} duration={500}>Section 2</Link>
          <Link to="section3" smooth={true} duration={500}>Section 3</Link>
        </nav>
      </header>
      <section id="section1" style={{ height: '100vh', background: 'lightblue' }}>Section 1</section>
      <section id="section2" style={{ height: '100vh', background: 'lightcoral' }}>Section 2</section>
      <section id="section3" style={{ height: '100vh', background: 'lightgreen' }}>Section 3</section>
    </div>
  );
}


*/
