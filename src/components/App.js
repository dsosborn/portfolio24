import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";
import Modal from "./Modal";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Hero />
        <Projects />
        <Footer />
      </div>

      <Modal />
    </div>
  );
};

export default App;
