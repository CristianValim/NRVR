import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

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
    
    img {
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        font-style: italic;
        background-repeat: no-repeat;
        background-size: cover;
        shape-margin: 0.75rem;
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

    a:hover {
        filter: brightness(0.6);
    }
`