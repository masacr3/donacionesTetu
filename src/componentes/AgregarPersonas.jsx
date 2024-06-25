import React, { useState } from 'react'
import axios from 'axios';

function AgregarPersonas() {
    const [nombre, setNombre] = useState('');
    const [provincia, setProvincia] = useState('');
    const [monto, setMonto] = useState('');
    const [mensaje, setMensaje] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const dto = { nombre, provincia, monto: parseInt(monto) };
  
      axios.post('https://masacr3.pythonanywhere.com/usuarios', dto)
        .then(response => {
          setMensaje(response.data.mensaje);
          setTimeout(() => {
            setMensaje('');
            setNombre('');
            setProvincia('');
            setMonto('');
          }, 5000);
        });
    };
  
    return (
      <div className='container-secrets'>
        <h1 className='gvr fs-30'>Pushear usuario</h1>
        <form onSubmit={handleSubmit} className='card secrets'>
          <div>
            <span className='lora'>Nombre</span>
            <input
              className='secrets-input'
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <span className='lora'>Provincia</span>
            <input
              className='secrets-input'
              type="text"
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
            />
          </div>
          <div>
            <span className='lora'>Monto</span>
            <input
              className='secrets-input'
              type="number"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
            />
          </div>
          <button className='secrets-bton' type="submit">Crear Usuario</button>
        </form>
        {mensaje && <div className='copy-success'>{mensaje}</div>}
      </div>
    )
}

export default AgregarPersonas