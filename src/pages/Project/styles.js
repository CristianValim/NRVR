import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  .cover {
    width: 100%;
    object-fit: cover;
  }

  main {
    margin: 7.7rem 0 8.6rem;
    display: flex;
    justify-content: space-around;
  }

  .flex-wrap {
    width: 90%;
    margin: 5% auto;

    h1 {
      font-size: clamp(4rem, calc(2rem + 2vw), 6rem);
      font-weight: 300;
      line-height: 1;

      margin-bottom: 2rem;
    }

    .info {
      font-size: clamp(1.2rem, calc(1rem + 1vw), 1.6rem);
      line-height: 1.5;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: clamp(1.2rem, calc(1rem + 1vw), 1.6rem);
      font-weight: 300;
      line-height: 2.5rem;
    }

    h2 span {
      font-size: clamp(1.2rem, calc(1rem + 1vw), 1.6rem);
      font-weight: 600;
    }
  }

  .gallery,
  .figures {
    width: 90%;
    display: grid;
    gap: 1.8rem;
    margin-bottom: 1.8rem;
    margin-inline: auto;
  }

  .gallery img,
  .figures img {
    max-height: 62.4rem;
    object-fit: cover;
    width: 100%;
  }

  iframe {
    width: 100%;
    aspect-ratio: 9/16;
  }

  @media (min-width: 600px) {
    .cover {
      height: calc(91svh - 1.8rem);
    }

    .description {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-inline: 10%;

      .info {
        max-width: 45rem;
        line-height: 2;
        grid-row: span 2;
        justify-self: end;
      }

      .detail {
        grid-row: span 2;
      }
    }

    .gallery {
      grid-template-columns: repeat(2, 1fr);
    }

    .figures {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      gap: 1.8rem;

      img {
        aspect-ratio: 1/1;
      }
    }

    iframe {
      width: 100%;
      aspect-ratio: 1/1;
    }
  }
`;
