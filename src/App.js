import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";

function App() {
  
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
