import Header from './components/Header/Header';
import Home from './components/Home';
import Projects from './components/Projetcs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Proyectos' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
