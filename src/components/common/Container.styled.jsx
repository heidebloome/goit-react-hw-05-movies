import styled from 'styled-components';

export const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    margin-top: ${props => props.theme.spacing(2)};
    padding-left: 20px;
    padding-right: 20px;

    @media screen and (min-width: 945px) {
        width: 820px;
    }

    @media screen and (min-width: 1280px) {
        width: 970px;
    }
`;