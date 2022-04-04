import styled from 'styled-components';

export const Item = styled.li`
    color: ${props => props.theme.colors.black};
    font-size: 18px;
    text-align: center;

    transition: transform 250ms ease, color 250ms ease;

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.backgroundColor};
        transform: scale(1.02);
    }
`;

export const Text = styled.p`
    height: 45px;
    margin-top: ${props => props.theme.spacing(4)};
    margin-bottom: ${props => props.theme.spacing(1)};
`;