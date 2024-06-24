import React, { useEffect, useState } from 'react'
import axios from "axios"

// eslint-disable-next-line react/prop-types
function PageGracias({fselected}) {
  const [data, setData] = useState([]);
  //const endpoint = "http://192.168.0.9:5000/usuarios" 
  const endpoint = "https://masacr3.pythonanywhere.com/usuarios"

  const capitalizeFirstLetter = (text) => {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  useEffect(()=>{
    fselected('gracias')
    axios.get(endpoint)
      .then(response => {
        setData([...response.data]);
        console.log(response.data);
      })
      },[fselected]);

  return (
    <div className='card'>
      <h2 className='gvr'>Sin ustedes esto no es posible</h2>
      <ul>
        {data && 
          data.map((item,i) =>
            <li key={i} className='lora'>
              ❤️ {capitalizeFirstLetter(item.nombre)} 
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default PageGracias