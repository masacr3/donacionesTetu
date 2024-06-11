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
      <p className='gvr'>
        Ahora en junio estare cumpliendo un añito. Me gusta comer todo el dia.
        Tengo una hermana mayor que se llama Lola con la que juego y aprendo todo. Desde llorarle a papa,
        romperle los apuntes de la Facu , hasta romperle las medias o jugar con sus zapatillas .
      </p>
      <p className='gvr'>
        La parte mas que mas me gusta del dia es cuando estoy con la abuela. Yo la amo y ella me ama a mi.
        Desayunamos y merendamos juntas. Y yo como buena guardiana no dejo que papa se acerque a las galletitas
        le hago !wau! !wau! y sino entiede le muerdo la mano y la abuela me felicita por atacarlo a papa. Todos mis dias 
        son Felices.
      </p>
      <p className='gvr'>
        En mayo la abuela me toco la pancita y noto algo raro. Como unos bultitos en la tetitas. Para saber que son
        nesesito operarme y seguir con el tratamiento. Nesesito de tu ayuda para juntar los fondos para mi operacion. Y poder seguir mordiendolo a papa 
        cuando esta estudiando para rendir en la facu, desayunar con la abuela por las mañanas y jugar todo el dia con Lola con los carpetas de papa. 
      </p>

      <p className='gvr'>Muchas gracias por leer mi historia. Te quiero un monton</p>

      <p className='gvr'>En los botones de abajo tenes toda la info</p>
    </div>
  )
}

export default Home