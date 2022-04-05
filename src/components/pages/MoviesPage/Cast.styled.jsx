import styled, {css} from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${props => props.theme.spacing(3)};
    grid-column-gap: ${props => props.theme.spacing(3)};
    padding: 0;

    list-style: none;

    @media(min-width: 480px) {
        grid-template-columns: 1fr 1fr 1fr;
    };

    @media(min-width: 748px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    };

    @media(min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    };
`;

export const Img = styled.img`
    max-width: 150px;
`;

export const Text = styled.p`
    font-size: 12px;

    ${props =>
    props.b &&
    css`
      font-weight: 500;
    `};
`;