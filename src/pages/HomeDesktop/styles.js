import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  text-align: center;

  .overlay-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .images {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2.6rem;

    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4)
    );
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .overlay-container:hover .overlay {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 93svh;
    object-fit: cover;
  }
`;
