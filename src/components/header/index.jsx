import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/logo.png'

export function Header() {
    return (
        <Container>
            <Link to="/">
                <img className='logo' src={logo} alt="Logo NRVR" />
            </Link>

            <ul>
                <li><Link to="/casas">casas</Link></li>
                <li><Link to="/comercial">comercial</Link></li>
                <li><Link to="/interiores">interiores</Link></li>
                <li><Link to="/edificios">edificios</Link></li>
                <li><Link to="/objetos">objetos</Link></li>
            </ul>

            <Link to="/sobre">sobre</Link>
        </Container>
    )
}