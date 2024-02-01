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
                    <li><Link className="underline" to="/projetos/casas" >casas</Link></li>
                    <li><Link className="underline" to="/projetos/interiores">interiores</Link></li>
                    <li><Link className="underline" to="/projetos/edificios">edificios</Link></li>
                    <li><Link className="underline" to="/projetos/objetos">objetos</Link></li>
                </ul>

                <Link className="underline" to="/sobre" >sobre</Link>
        </Container>
    )
}