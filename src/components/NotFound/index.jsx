import { Container } from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png'

export function NotFound() {
  return (
    <Container>
        <img src={logo} alt="Logo NRVR" />
        <h1>404 - Página não encontrada {':('}</h1>
        <Link to="/">Voltar para o início</Link>
    </Container>
  );
}