import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  font-weight: 300;
  min-height: 100vh;

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
    display: inline-block;
  }

  p {
    margin: 2rem 5%;
  }

  .sobre span {
    font-size: 2.1rem;
  }

  .row1 {
    grid-row-start: 1;
  }

  .col1 {
    grid-column-start: 1;
  }

  .col2 {
    grid-column-start: 2;
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
    max-width: 3rem;
    margin-top: 0.5rem;

    position: absolute;
    right: 5%;
  }

  .contact * {
    margin-top: 1rem;
  }

  @media (min-width: 600px) {
    margin-inline: 5%;

    .sobre {
      margin-top: 3.8rem;
      display: grid;
      grid-template-columns: 1fr 2fr 3fr;

      p {
        max-width: 45rem;
        margin-right: 15%;
      }
    }

    h1,
    h3,
    .social {
      margin-inline: 0%;
    }

    p {
      margin: 0;
    }

    img {
      width: 100%;
      margin: 0;
    }

    .instagram-logo {
      grid-row-start: 3;
      grid-column-start: 2;

      position: relative;
      left: 0;
    }
  }
`;
