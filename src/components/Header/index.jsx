import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/logo.png'
import { useState } from 'react';

export function Header() {
    const [ margin, setMargin ] = useState(false);

    function handleMarginOn() {
        setMargin(true);
    }

    function handleMarginOff() {
        setMargin(false)
    }

    return (
        <Container
            style={ margin ? {marginInline: "5%", transition: "1s"} : {marginInline: "1.3rem", transition: "1s"}}
            >
                <Link to="/NRVR" onClick={handleMarginOff}>
                    <img className='logo' src={logo} alt="Logo NRVR" />
                </Link>

                <ul>
                    <li><Link className='underline' onClick={handleMarginOn} to="/casas" >casas</Link></li>
                    <li><Link className='underline' onClick={handleMarginOn} to="/comercial">comercial</Link></li>
                    <li><Link className='underline' onClick={handleMarginOn} to="/interiores">interiores</Link></li>
                    <li><Link className='underline' onClick={handleMarginOn} to="/edificios">edificios</Link></li>
                    <li><Link className='underline' onClick={handleMarginOn} to="/objetos">objetos</Link></li>
                </ul>

                <button id='about'onClick={handleMarginOff}>
                    <Link className="underline" to="/sobre">sobre</Link>
                </button>
        </Container>
    )
}