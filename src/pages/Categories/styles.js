import styled from "styled-components";
import { motion } from 'framer-motion';


export const Container = styled(motion.div)`
  margin: 0 5% 5rem;
  text-align: center;
    
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
  
  .overlay-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    aspect-ratio: 16 / 9;
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
    color: #FFF;
    font-size: 2.6rem;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
    opacity: 0;
    transition: opacity 0.5s ease;
}

.overlay-container:hover .overlay {
    opacity: 1;
}
`;