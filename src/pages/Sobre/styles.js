import styled from "styled-components";

export const Container = styled.div`
    padding-inline: 3%;

    h1 {
        font-size: 3.2rem;
        font-weight: 300;
    }

    .sobre span {
        font-size: 2.1rem;
        font-weight: 300; 
        line-height: 1;
    }

    .sobre {
        margin-top: 3.8rem;
        padding: 0 6.6rem;

        display: grid;
        grid-template-columns: 1fr 2fr 3fr;
        column-gap: 5rem;
    }

    .sobre img {
        width: 100%;
    }

    .sobre .col2 {
        grid-column-start: 2;
        position: relative;
    }

    .sobre .instagram {
        max-width: 3rem;
        margin-top: .8rem;
        position: absolute;
        left: -.3rem;
    }

`