import Tetu1 from '../images/tetu2.png'
import { useEffect } from 'react';

function Home({fselected}) {

  useEffect(()=>{
    fselected('home')
	},[]);

  return (
    <div className='card'>
      <h2 className='gvr'>Hola mi nombre es Tetu</h2>
      <img className="img" src={Tetu1} alt="" />
      <p className='lora'>
       Nesesito tu ayuda para poder operarme 
      </p>
      <p className='lora'>En los botones de abajo tenes toda la info</p>
    </div>
  )
}

export default Home