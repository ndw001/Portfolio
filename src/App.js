import "./App.css";
import IntroPage from "./components/IntroPage";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
