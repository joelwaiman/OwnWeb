import { useState } from 'react';
import { Header } from './components/Header/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import { useIntersectionObserver } from './IntersectionObserver';

function App() {
  const [activeSection, setActiveSection] = useState('#home');

  useIntersectionObserver(setActiveSection);

  return (
    <BrowserRouter>
      <Header activeSection={activeSection} />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="proyectos">
          <Projects />
        </section>
        <section id="contacto">
          <Contact />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
