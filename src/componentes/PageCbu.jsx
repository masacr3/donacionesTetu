
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
function PageCbu({fselected}) {
  const codigo = "0000003100095781816087";
  const [copySuccess, setCopySuccess] = useState(false);
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
      }, 4000); 
    } catch (err) {
      console.error('Error al copiar el CBU: ', err);
    }
  };

	useEffect(()=>{
    fselected('metodo-pago')
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