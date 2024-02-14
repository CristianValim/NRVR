import styled from "styled-components";

export const Container = styled.div`
    margin-inline: 5%;

    .cover {
        width: 100%;
        height: calc(93svh - 1.8rem);
        object-fit: cover;
    }

    main {
        margin: 7.7rem 0 8.6rem;
        display: flex;
        justify-content: space-around;
    }

    .flex-wrap {
        width: 80%;
        margin: 10% auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        
        h1 {
            font-size: 6rem;
            font-weight: 300; 
            line-height: 1;

            margin-bottom: 2rem;
        }

        h2 {
            font-weight: 300;
            line-height: 2.5rem;
        }

        h2 span {
            font-weight: 700;
        }

        .info {
            margin-left: 20%;
            max-width: 60%;
            line-height: 2;
        }
    }

    

    .gallery {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.8rem;

        img {
            aspect-ratio: 9 / 16;
        }
    }

    .gallery img, .figures img{
        width: 100%;
        max-height: 62.4rem;
        object-fit: cover;
    }

    .figures {
        margin: 1.8rem 0 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        gap: 1.8rem;

        img {
            aspect-ratio: 1/1;
        }
    }

    .video iframe{
        width: 100%;
        max-height: 93vh;
        aspect-ratio: 16/9;
        margin-bottom: 5rem;
    }
`