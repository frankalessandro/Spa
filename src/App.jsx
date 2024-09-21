import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { SliderMain } from './components/SliderMain';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>

      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />

        {/* Puedes agregar más rutas aquí si es necesario */}
        {/* Ejemplo: <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
