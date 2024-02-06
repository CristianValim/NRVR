import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/logo.png'

export function Header() {

    return (
        <Container>
                <Link to="/NRVR">
                    <img className='logo' src={logo} alt="Logo NRVR" />
                </Link>

                <ul>
                    <li><Link className="underline" to="/casas" >casas</Link></li>
                    <li><Link className="underline" to="/comercial">comercial</Link></li>
                    <li><Link className="underline" to="/interiores">interiores</Link></li>
                    <li><Link className="underline" to="/edificios">edificios</Link></li>
                    <li><Link className="underline" to="/objetos">objetos</Link></li>
                </ul>

                <Link id='about' className="underline" to="/sobre" >sobre</Link>
        </Container>
    )
}