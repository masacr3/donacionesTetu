import React, { useEffect, useState } from 'react'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
function Meta({fselected}) {
	const [monto, setMonto] = useState('300.000')
	const [recaudado, setRecaudado] = useState('') //51.100
	const endpoint = "https://masacr3.pythonanywhere.com/usuarios"

	const convertirANumeroYponerPunto = data =>{
		let contador = 0
		data.forEach(element => {
			if(element.monto != 1){
				contador += element.monto;
			}
		});
		let contadorStr = contador.toString();
		let numeroinvertido = []
		let j = 0;
		for (let i = contadorStr.length -1 ;  i >= 0; i --){
			if ( j % 3 == 0 ){
				numeroinvertido.push(".");
			}
			numeroinvertido.push(contadorStr[i]);
			j++;
		}
		numeroinvertido = numeroinvertido.reverse()
		if (numeroinvertido[numeroinvertido.length -1] == '.'){
			numeroinvertido.pop()
		}
		console.log(numeroinvertido.join(""));
		return numeroinvertido.join("");
	}


	useEffect( () =>{
		fselected('meta')
		axios.get(endpoint)
		.then(response =>{ 
			let calcularRecaudacion = convertirANumeroYponerPunto(response.data)
			setRecaudado(calcularRecaudacion);
		})
	},[])

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