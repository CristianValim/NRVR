import styled from "styled-components";

export const Container = styled.header`
  min-height: 7svh;
  padding: 3rem;

  position: sticky;
  top: 0;
  z-index: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    max-width: 8.5rem;
  }

  .mobile {
    position: absolute;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};

    width: 100%;
    top: 11vh;
    left: 0;

    ul {
      gap: 20%;
      li {
        margin-bottom: 2.4rem;
      }
    }
  }

  .desktop {
    width: 100%;
  }

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10%;
    margin: 3rem 0;
  }

  #about {
    text-align: end;
    min-width: 8.5rem;
    margin-right: 1rem;

    a {
      font-size: 1.6rem;
    }
  }

  .underline {
    position: relative;
    text-decoration: none;
  }

  .underline:before {
    content: "";
    position: absolute;
    width: 0;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.COLORS.FONT_COLOR};

    visibility: hidden;
    opacity: 0;
    transform-origin: left center;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: all 0.5s ease;
  }

  .underline:hover::before {
    width: 100%;
    opacity: 1;
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  @media (min-width: 600px) {
    margin-inline: 0rem;
    padding: 0;
  }
`;
