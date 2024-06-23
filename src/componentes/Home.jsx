import Tetu1 from '../images/tetu1.png'
import { useEffect } from 'react';

function Home({fselected}) {

  useEffect(()=>{
    fselected('home')
	},[]);

  return (
    <div className='card no-margin'>
      <img className="img" src={Tetu1} alt="" />
      <h2 className='gvr presentacion-tetu'>Hola soy Tetu</h2>
      <p className='lora mensaje-tetu'>
       Nesesito tu ayuda para poder operarme 
      </p>
    </div>
  )
}

export default Home