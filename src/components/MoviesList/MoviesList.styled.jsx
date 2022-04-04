import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    list-style: none;

    padding-left: ${props => props.theme.spacing(3)};
    padding-right: ${props => props.theme.spacing(3)};

    @media(min-width: 480px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: ${props => props.theme.spacing(3)};
        grid-column-gap: ${props => props.theme.spacing(3)};
    };

    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    };

    @media(min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    };
`;