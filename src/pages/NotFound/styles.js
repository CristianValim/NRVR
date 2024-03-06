import styled from "styled-components";
import { motion } from 'framer-motion';


export const Container = styled(motion.div)`
    height: 100vh;

    display: grid;
    place-content: center;
    text-align: center;
    img {
        margin-inline: auto;
        width: 50%;
    }

    h1 {
        margin-top: 5rem;
        font-size: 3.2rem;
    }

    a {
        margin-top: 2rem;
    }
`