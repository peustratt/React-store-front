import styled from 'styled-components';

export const Div = styled.div`
    color: ${props => !props.inStock ? '#8D8F9A' : '#1D1F22'};
    padding: 1em;
    transition: 100ms ease-in-out;
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }

    > .img-wrapper {
        position: relative;
        overflow: hidden;
        height: 330px;
        width: 354px;
        > span {
            font-family: 'Raleway', sans-serif;
            font-size: 24px;
            text-transform: uppercase;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: fit-content;
        }
        > img {
            object-fit: contain;
            height: 100%;
            width: 100%;
            opacity: ${props => !props.inStock ? .5 : 1}
        } 
    }

    > h3 {
        font-weight: 300;
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
    }
`