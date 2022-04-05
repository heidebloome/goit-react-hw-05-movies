import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding-top: ${props => props.theme.spacing(2)};
    padding-bottom: ${props => props.theme.spacing(2)};
    margin-top: ${props => props.theme.spacing(2)};
    margin-bottom: ${props => props.theme.spacing(2)};

    &:hover {
        color: ${props => props.theme.colors.backgroundColor};
    }
`;


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: ${props => props.theme.spacing(2)};

    @media screen and (max-width: 944px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`    
    @media screen and (min-width: 945px) {
        width: 500px;
        margin-left: 20px;
    }

    @media screen and (min-width: 1280px) {
        width: 600px;
    }
`;

export const Title = styled.h1`
    margin-top: ${props => props.theme.spacing(5)};
    margin-bottom: ${props => props.theme.spacing(5)};

    font-size: 28px;
`;

export const SubTitle = styled.h2`
    font-size: 24px;
`;

export const Img = styled.img`
    max-width: 300px;
    max-height: 525px;
    
    @media screen and (min-width: 945px) {
        max-width: 350px;
    }
`;

export const List = styled.ul`
    ${props =>
    props.btn &&
    css`
      display: flex;
    `};

    ${props =>
    props.ls &&
    css`
      list-style: none;
      padding: 0;
    `};
`;

export const Item = styled.li`
    ${props =>
    props.mr &&
    css`
        &:not(:last-child) {
            margin-right: ${props => props.theme.spacing(2)};
        }
    `};
`;