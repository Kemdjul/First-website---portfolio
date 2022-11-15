import { useState } from "react";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import Navbar from './components/Navbar.jsx';
import Skills from "./components/Skills.jsx";

function App() {
  
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
