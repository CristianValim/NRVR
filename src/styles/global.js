import { createGlobalStyle } from "styled-components";
import hando from "/src/fonts/hando/Hando Regular.ttf";

export default createGlobalStyle`
    @font-face {
      font-family: 'Hando';
      src: url${hando} format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    * {
      margin: 0;
      padding: 0;

      -webkit-font-smoothing : antialiased;
      -moz-osx-font-smoothing: grayscale;

      font: inherit;
      font-size: 1.4rem;
    }

    :root {
      font-size        : 62.5%;
      scroll-behavior: smooth;
    }
    
    body {
      background: ${({ theme }) => theme.COLORS.BACKGROUND};

      color: ${({ theme }) => theme.COLORS.FONT_COLOR};
      font-family: ${({ theme }) => theme.FONTS.FONT_MAIN};
    }

    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        font-style: italic;
        background-repeat: no-repeat;
        background-size: cover;
        shape-margin: 0.75rem;

        display: grid;
        place-content: center;
    }

    a, button {
      text-decoration: none;
      color: inherit;
      cursor: pointer;

      border: none;
      background: transparent;

    }

    ul {
      list-style: none;
    }
`;
