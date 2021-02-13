import styled, { createGlobalStyle } from 'styled-components';
import logo from '../../images/logo.png';

export const Nav = styled.div`
        background-color: #F3A0A6;
        align-items: center;
        position: sticky;
        display: flex;
        z-index: 999;
        height: 149px;
        top: 0;

`;
export const Row = styled.div`
    margin: 0 auto;
`;

export const Logo = styled.img`
        src: url'(${logo})';
        text-align: center;
        width: 83px;
        height: 86px;
        border-radius: 75px;
`;
