import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/logo.png'

export function Header({ margin }) {

    return (
        <Container className={margin ? "animation" : "head"}>
                <Link to="/">
                    <img className='logo' src={logo} alt="Logo NRVR" />
                </Link>

                <ul>
                    <li><Link className="underline" to="/casas" >casas</Link></li>
                    <li><Link className="underline" to="/interiores">interiores</Link></li>
                    <li><Link className="underline" to="/edificios">edificios</Link></li>
                    <li><Link className="underline" to="/objetos">objetos</Link></li>
                </ul>

                <Link className="underline" to="/sobre" >sobre</Link>
        </Container>
    )
}