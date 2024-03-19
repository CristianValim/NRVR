import { Container } from './styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Remova AnimatePresence

import logo from '../../assets/logo.png';

export function NotFound() {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <img
        src={logo}
        alt="Logo NRVR"
      />
      <h1>404 - Página não encontrada {':('}</h1>
      <Link to="/">Voltar para o início</Link>
    </Container>
  );
}
