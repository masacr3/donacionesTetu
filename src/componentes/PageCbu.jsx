import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PageCbu({fselected}) {
  const [codigo, setCodigo] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  //const endpoint = "http://192.168.0.69:8080/cbu"
  const endpoint = "https://donacionesapi.onrender.com/cbu"
  const phoneNumber = '5491124616385'; // Reemplaza con el número de teléfono al que quieres enviar el mensaje
  const message1 = 'Te agradesco de corazon el aporte'
  const message2 = "te quiero pedir la ultima molestia si podes adjuntar el comprobante asi actualizo el contador, muchas gracias"

  const handleWhatsAppClick = () => {
    const message = `${message1}\n\n${message2}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCopyClick = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(codigo);
        setCopySuccess(true);
      } else {
        // Fallback para navegadores que no soportan la API del portapapeles
        const textArea = document.createElement("textarea");
        textArea.value = codigo;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopySuccess(true);
      }
      setTimeout(() => {
        setCopySuccess(false);
      }, 4000); // Ocultar mensaje después de 4 segundos
    } catch (err) {
      console.error('Error al copiar el CBU: ', err);
    }
  };

	useEffect(()=>{
    fselected('metodo-pago')
		axios.get(endpoint)
			.then(response => setCodigo(response.data[0].codigo)); 
		},[]);

  return (
    <div className='card cbu-center'>
      <h2 className='gvr'>Cbu</h2>
      <div className='box cbu' onClick={handleCopyClick}>
        <div className='row'>
          <span className='lora fs-12'>{codigo}</span>
          <span className='copyMsj'>Copiar CBU</span>
        </div>
        <div className='row off'>
          Leonel Rolon
        </div>
      </div>
      {copySuccess && (
        <div className="copy-success">
          Se copió el CBU al portapapeles exitosamente.
        </div>
      )}
      <p>Si ya transferiste avisame !</p>
      <button className='bton-cbu' onClick={handleWhatsAppClick}>Notificar transferencia!</button>
    </div>
  );
}

export default PageCbu