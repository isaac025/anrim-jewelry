import styled, { createGlobalStyle } from 'styled-components';
import Background from './images/jewelry.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${Background});
        background-size: cover;
        margin: 0;
        padding: 0 20px
        display: flex;
        justify-content: center;
    }
`;
