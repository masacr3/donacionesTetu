import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import PageGracias from './componentes/PageGracias'
import Home from './componentes/Home'
import Navegacion from './componentes/Navegacion'
import PageCbu from './componentes/PageCbu';
import { useState } from 'react';
import ViewportDimensions from './componentes/ViewportDimensions';

function App() {
  const [selected, setSelected] = useState(null)
  const wrapperSelected = (argumento) => setSelected(argumento); 

  return (
    <Router>
      <Navegacion selected={selected} fselected={wrapperSelected}/>
      <Routes className='container'>
        <Route path="/gracias" element={<PageGracias fselected={wrapperSelected} />} /> {/* Usa element en lugar de component */}
        <Route path="/" element={<ViewportDimensions />} />
        <Route path="/metodo-pago" element={<PageCbu fselected={wrapperSelected}/>} />
      </Routes>
    </Router>
  )
}

export default App
