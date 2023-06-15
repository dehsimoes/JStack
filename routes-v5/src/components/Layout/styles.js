import styled from 'styled-components';

export const Nav = styled.nav`
    background: ${({ theme }) => theme.navBackgroundColor};
    margin-top: 16px;
    padding: 16px;
    border-radius: 4px;

    a {
        color: #fff;
        text-decoration: none;
        display: inline-block;

        & + a {
            margin-left: 16px;
        }
    }
`;