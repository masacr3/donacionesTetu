import React, { useEffect, useState } from 'react'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
function Meta({fselected}) {
	const [monto, setMonto] = useState('300.000')
	const [recaudado, setRecaudado] = useState('35.000')
	//const endpoint = "https://masacr3.pythonanywhere.com/objetivos/monto"

	useEffect( () =>{
		fselected('meta')
		// axios.get(endpoint)
		// .then(response =>{ 
		// 	console.log(response.data.mensaje[0].monto)
		// 	setMonto(response.data.mensaje[0].monto)
		// })
	},[fselected])

  return (
    <div className='card cbu-center'>
		<p className='lato-regular p3'>Meta</p>
		{ monto && <h3 className='lato-bold le-2 fs-30 h3'>$ {monto}</h3> }
        <p className='lato-light p3'>Recaudado</p>
		{ recaudado && <h3 className='lato-bold le-2 fs-30 h3'>$ {recaudado}</h3>}
    </div>
  )
}

export default Meta