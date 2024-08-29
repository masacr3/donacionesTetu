import React, { useState , useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import './Navegacion.css';
import homeIcon from '../images/perro.png';
import dineroIcon from '../images/dinero.png';
import transforenciaIcon from '../images/transferencia.png';
import graciasIcon from '../images/gracias.png';

const Navegacion  = ({selected, fselected}) => {
  const navigate = useNavigate();

  const handleIconClick = (icon) => {
    fselected(icon);
    switch (icon) {
      case 'home':
        navigate('/', { replace: true });
        break;
      case 'meta':
        navigate('/meta',{ replace: true });
        break;
      case 'metodo-pago':
        navigate('/metodo-pago',{ replace: true });
        break;
      case 'gracias':
        navigate('/gracias',{ replace: true });
        break;
      default:
        break;
    }
  };

  return (
    <div className='fixed'>

    <div className="menu">
      <div
        className={`menu-item ${selected === 'home' ? 'selected' : ''}`}
        onClick={() => handleIconClick('home')}
      >
        <img src={homeIcon} alt="Home" />
      </div>
      <div className="menu-line"></div>
      <div
        className={`menu-item ${selected === 'meta' ? 'selected' : ''}`}
        onClick={() => handleIconClick('meta')}
      >
        <img src={dineroIcon} alt="meta" />
      </div>
      <div className="menu-line"></div>
      <div
        className={`menu-item ${selected === 'metodo-pago' ? 'selected' : ''}`}
        onClick={() => handleIconClick('metodo-pago')}
      >
        <img src={transforenciaIcon} alt="metodo-pago" />
      </div>
      <div className="menu-line"></div>
      <div
        className={`menu-item ${selected === 'gracias' ? 'selected' : ''}`}
        onClick={() => handleIconClick('gracias')}
      >
        <img src={graciasIcon} alt="gracias" />
      </div>
    </div>
    </div>
  );
};

export default Navegacion