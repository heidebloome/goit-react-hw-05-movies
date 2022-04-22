import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.theme.spacing(3)}
`;

export const Input = styled.input`
    width: 190px;
    height: 30px;
    margin-right: ${props => props.theme.spacing(2)};
    padding-left: ${props => props.theme.spacing(3)};
    border: 1px solid black;
    border-radius: 4px;
    transition: border-color 250ms ease-in-out;

    &:hover {
        cursor: pointer;
    }

    &:focus {
        border-color: ${props => props.theme.colors.backgroundColor};
        outline: none;
  }
`;