import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;

    background-color: ${props => props.theme.colors.backgroundColor};

    & a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        font-size: 24px;
        font-weight: 500;
        border-bottom: 2px solid transparent;

        &:not(:last-child) {
            margin-right: ${props => props.theme.spacing(7)};
        }

        &.active {
            border-bottom: 2px solid ${props => props.theme.colors.white};
        }
    }
`;