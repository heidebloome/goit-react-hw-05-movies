import styled from 'styled-components';

// export const Item = styled.li`
//     width: 100%;
//     padding: 5px;

//     color: ${props => props.theme.colors.black};
//     font-size: 18px;
//     text-align: center;

//     &:nth-child(2n) {
//         background-color: #f1f1f1;
//     }

//     &:hover {
//         cursor: pointer;
//         color: ${props => props.theme.colors.backgroundColor};
//         border: 1px solid ${props => props.theme.colors.backgroundColor};
//     }
// `;

export const Item = styled.li`
    width: 200px;
    // padding: 5px;

    color: ${props => props.theme.colors.black};
    font-size: 18px;
    text-align: center;

    transition: transform 250ms ease;

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.backgroundColor};
        transform: scale(1.02);
    }
`;

export const Img = styled.img`
    max-width: 200px;
    max-height: 300px;

    margin-left: auto;
    margin-right: auto;
`