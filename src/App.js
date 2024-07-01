import { Header } from './components/Header/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Projects />
      <Contact />
    </BrowserRouter>

  )
}

export default App;
