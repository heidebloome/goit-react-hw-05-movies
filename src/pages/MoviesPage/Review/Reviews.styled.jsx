import styled, {css} from 'styled-components';

export const List = styled.ul`
    padding: 0;
    list-style: none;
`;

export const Text = styled.p`
    ${props =>
    props.b &&
    css`
      font-weight: 700;
    `};
`;