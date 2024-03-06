import styled from "styled-components"; 
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    min-height: 100vh;

    img {
        width: 100%;
        height: 93svh;
        object-fit: cover;
    } 
`