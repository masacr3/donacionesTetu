import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import PageGracias from './componentes/PageGracias'
import Home from './componentes/Home'
import Navegacion from './componentes/Navegacion'
import PageCbu from './componentes/PageCbu';
import PageMeta from './componentes/Meta'
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState(null)
  const wrapperSelected = (argumento) => setSelected(argumento); 

  return (
    <HashRouter>
      <Navegacion selected={selected} fselected={wrapperSelected}/>
      <Routes className='container'>
        <Route path="/" element={<Home fselected={wrapperSelected}/>} />
        <Route path="/gracias" element={<PageGracias fselected={wrapperSelected} />} /> {/* Usa element en lugar de component */}
        <Route path="/metodo-pago" element={<PageCbu fselected={wrapperSelected}/>} />
        <Route path="/meta" element={<PageMeta fselected={wrapperSelected}/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
