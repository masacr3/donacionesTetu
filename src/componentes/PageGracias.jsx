import React, { useEffect, useState } from 'react'
import axios from "axios"

function PageGracias({fselected}) {
  const [data, setData] = useState([]);
  //const endpoint = "http://192.168.0.69:8080/agradecimientos" 
  const endpoint = "https://donacionesapi.onrender.com/agradecimientos"

  useEffect(()=>{
    fselected('gracias')
    axios.get(endpoint)
      .then(response => {
        setData([...response.data]);
        console.log(response.data);
      })
      },[]);

  return (
    <div className='card'>
      <h2 className='gvr'>Sin ustedes esto no es posible</h2>
      <ul>
        {data && 
          data.map((item,i) =>
            <li key={i} className='lora'>
              {item.nombre}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default PageGracias