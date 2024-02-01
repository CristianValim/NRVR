import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 5rem;
  padding-inline: 3%;

  .casas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }

  .imagem-container {
    position: relative;
    overflow: hidden;
  }

  img {
    width: 100%;
    transition: transform 0.3s ease; /* Adiciona uma transição suave */
  }

  .overlay {
    display: grid;
    place-content: center;
    color: #FFF;
    font-size: 2.6rem;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    opacity: 0;
    transition: opacity 1s ease;
  }

  .imagem-container:hover .overlay {
    opacity: 1;
  }
`;