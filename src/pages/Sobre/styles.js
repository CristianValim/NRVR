import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  font-weight: 300;

  h1,
  h3,
  .social {
    margin-inline: 5%;
  }

  img {
    margin-bottom: 3.5rem;
  }

  h1 {
    font-size: 3.2rem;
  }

  p {
    margin: 2rem 5%;
  }

  .sobre span {
    font-size: 2.1rem;
  }

  .col1 {
    grid-column-start: 1;
  }

  .row1 {
    grid-row-start: 1;
  }

  .col3 {
    grid-column-start: 3;
  }

  .instagram-flex {
    margin-right: 5%;
    display: flex;
    justify-content: space-between;
  }

  .instagram-logo {
    margin-top: 0.5rem;
    max-width: 3rem;
    display: block;
    color: #008ce2;
  }

  .contact * {
    margin-top: 1rem;
  }

  @media (min-width: 600px) {
    .sobre {
      margin-top: 3.8rem;
      display: grid;
      grid-template-columns: 1fr 2fr 3fr;
      column-gap: 5rem;
    }
  }
`;
