import styled from "styled-components";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    margin-inline: 5%;
    font-weight: 300;

    h1 {
        font-size: 3.2rem;
    }

    .sobre span {
        font-size: 2.1rem;
    }

    .sobre {
        margin-top: 3.8rem;
        display: grid;
        grid-template-columns: 1fr 2fr 3fr;
        column-gap: 5rem;
    }

    img {
        width: 100%;
    }

    .col2 {
        grid-column-start: 2;
    }

    .instagram {
        max-width: 3rem;
        display: block;
        color: #008CE2;
;
    }

    .contact * {
        margin-top: 1rem;
    }
`