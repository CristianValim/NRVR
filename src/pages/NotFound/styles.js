import { motion } from "framer-motion";
import styled from "styled-components";

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
    margin-inline: 5%;
    margin-top: 5rem;
    font-size: clamp(1.6rem, calc(2rem + 2vw), 3.2rem);
  }

  a {
    margin-top: 2rem;
  }
`;
