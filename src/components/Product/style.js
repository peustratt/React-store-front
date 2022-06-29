import styled from 'styled-components';

export const ProductContainer = styled.div`
    color: ${props => !props.inStock ? '#8D8F9A' : '#1D1F22'};
    padding: 16px;
    transition: 100ms ease-in-out;
    position: relative;
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
    
    .product-link {
        position: relative;
        z-index: 0;
        text-decoration: none;
        width: 100%;
        height: 100%;
        text-decoration: none;
        &:link {
            color: inherit;
        }
        &:visited {
            color: inherit;
        }
        &:hover {
            color: inherit;
        }
        &:active {
            color: inherit;
        }
    
        > .img-wrapper {
            position: relative;
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
        @keyframes become-opaque {
            0%   {opacity: 0;}
            100% {opacity: 1;}
        }

    }
    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: .9em;
        color: #fff;
        position: absolute;
        /* z-index: 20; */
        background: #5ECE7B;
        right: 2rem;
        top: 346px;
        transform: translateY(-50%);
        border: 0;
        animation: become-opaque 200ms;

        img {
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }
`