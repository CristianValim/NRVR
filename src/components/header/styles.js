import styled from "styled-components";

export const Container = styled.header`
    position: sticky;
    top: 0;
    background: ${({theme}) => theme.COLORS.BACKGROUND};
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .logo {
        padding: .9rem 0;
    }

    ul {
       display: flex;
       gap: 9.4rem;
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
        background-color: ${({theme}) => theme.COLORS.FONT_COLOR};
        
        visibility: hidden;
        opacity: 0;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
 
    .underline:hover::before {
        width: 100%;
        opacity: 1;
        visibility: visible;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);       
    }
`