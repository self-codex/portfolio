import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Home from "./components/Home";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;
