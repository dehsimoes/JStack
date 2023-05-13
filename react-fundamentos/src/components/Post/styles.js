/* import styled from 'styled-components';

export const Container = styled.article`
    margin-bottom: 24px;
    
    opacity: ${(props) => props.removed ? 0.5 : 1};
    color: ${(props) => props.removed ? '#f00' : '#fff'}
`;

export const Subtitle = styled.small`
    display: block;
`;

export const Likes = styled.span`
    font-size: 10px;
    opacity: 0.7;
`; */

//EM CASO QUE QUERIA USAR VARIOS CSS EM UM MESMO JS E QUISER PASSAR UMA VEZ A PROPS, PODE SER FEITO ASSIM:

import styled, { css } from 'styled-components';

export const Container = styled.article`
    margin-bottom: 24px;

    ${(props) => css`
        opacity: ${props.removed ? 0.5 : 1};
        color: ${props.removed ? '#f00' : '#fff'};
    `}

    /* TAMBEM PODE DESESTRUTURAR
    ${({ removed }) => css`
        opacity: ${removed ? 0.5 : 1};
        color: ${removed ? '#f00' : '#fff'};
    `} */
`;

export const Subtitle = styled.small`
    display: block;
`;

export const Likes = styled.span`
    font-size: 10px;
    opacity: 0.7;
`;