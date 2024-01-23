import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    margin-inline: 3%;

    .background img{
        width: 100%;
        max-height: 93vh;

        object-fit: cover;
    }

    main {
        margin: 7.7rem 0 8.6rem;
        display: flex;
        justify-content: space-around;
    }

    .head {
        
        h1 {
            font-size: 6rem;
            font-weight: 300; 
            line-height: 1;

            margin-bottom: 1.4rem;
        }

        h2 {
            font-weight: 300;
            line-height: 2.2rem;
        }

        h2 span {
            font-weight: 700;
        }
    }

    .info {
        max-width: 30rem;
    }

    .gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.8rem;
    }

    .gallery img, .figures img{
        width: 100%;
    }

    .figures {
        margin: 1.8rem 0 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 1.8rem;
    }
`