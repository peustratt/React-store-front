import styled from 'styled-components';

export const ProductContainer = styled.div`
    color: ${props => !props.inStock ? props.theme.colors.lightGray : props.theme.colors.mainDark};
    padding: 16px;
    transition: 150ms ease-in-out;
    position: relative;
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
    
    .product-link {
        color: ${props => props.theme.colors.mainDark};
        position: relative;
        z-index: 0;
        text-decoration: none;
        width: 100%;
        height: 100%;
        text-decoration: none;
        line-height: 1.6;
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
            height: 300px;
            width: 332px;
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
            margin-top: 24px;
            font-weight: 300;
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
        }
        >span {
            font-family: 'Raleway', sans-serif;
            font-weight: 500;
        }
        
    }

    @keyframes become-opaque {
        0%   {opacity: 0;}
        100% {opacity: 1;}
    }
    button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        padding: .9em;
        color: ${props => props.theme.colors.white};
        position: absolute;
        /* z-index: 20; */
        background: ${props => props.theme.colors.mainGreen};
        right: 2rem;
        top: 346px;
        transform: translateY(-50%);
        border: 0;
        animation: become-opaque 200ms;
        overflow: hidden;
        transition: 80ms ease-in-out;
        cursor: pointer;
        transform-origin: center ;

        &:active {
            /* box-shadow: inset 0 0 .6em #d4d4d4; */
            opacity: .8;
            background: ${props => props.theme.colors.orange};
            img {
                transform: scale(1.1);
            }
        }

        &:hover {
            transform: scale(1.05) translateY(-50%);

        }

        img {
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
    }
`