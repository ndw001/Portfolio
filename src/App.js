import logo from "./logo.svg";
import "./App.css";
import IntroPage from "./components/IntroPage";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <IntroPage />
      <Header />
      <Projects />
    </div>
  );
}

export default App;
