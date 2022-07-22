import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    margin: 100px 0;
    ${props => props.theme.padding}
    gap: 2em;
    width: fit-content;

    .gallery {
        max-height: 511px;
        position: relative;

         &::before {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 50px;
            background: ${props => props.showUpArrow ? 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(9,9,121,0) 100%)' : 'transparent'};
            z-index: 1;
        }

        &::after {
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 50px;
            background: ${props => props.showDownArrow ? 'linear-gradient(180deg, rgba(9,9,121,0) 0%,  rgba(255,255,255,1) 100%)' : 'transparent'};
            z-index: 1;
        }

        .gallery__wrapper {
            display: flex;
            flex-direction: column;
            gap: 1.5em;
            scroll-behavior: smooth;
            overflow-x: hidden;
            overflow-y: ${props => props.galleryOverflow ? 'auto' : 'hidden'};
            height: 100%;
            scrollbar-width: 0;
    
            /* Works on Chrome, Edge, and Safari */
            &::-webkit-scrollbar {
                display: none;
            }
    
            .gallery__img-wrapper {
                position: relative;
                width: 80px;
                height: 80px;
                cursor: pointer;
                transition: 120ms ease;
    
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: 100ms ease-in-out;
    
                    &:hover {
                        opacity: .8;
                        transform: scale(1.03);
                    }
                }
            }
        }
        .arrow-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            width: 60px;
            height: 60px;
            backdrop-filter: blur(1px);
            /* background: ${props => props.theme.colors.lightGray}; */
            background: rgba(255, 255, 255, .4);
            border-radius: 50%;
            cursor: pointer;

            &:hover {
                opacity: .8;
                transform: scale(1.08) translateX(calc(-50% + 1px))
            }
            
            &.up {
                display: ${props => props.showUpArrow ? 'flex' : 'none'};
                top: 10px;
            }
            &.down {
                display: ${props => props.showDownArrow ? 'flex' : 'none'};
                transform: rotateZ(180deg) translateX(50%);
                bottom: 10px;
            }

        }
        .arrow {
            margin-bottom: 30px;
            width: 6px;
            height: 6px;
            background: ${props => props.theme.colors.mainDark};
            transform-origin: right;
            transform: rotate(45deg);
            transform-origin: center;
            border-radius: 2px 0 0 0;


            &::before {
                position: absolute;
                content: "";
                width: 30px;
                height: inherit;
                background: inherit;
                right: 100%;
                transform-origin: right;
                transform: rotate(-90deg) translate(-3px, 3px);
                border-radius: 2px 0 0 2px;
            }

            &::after{
                position: absolute;
                content: "";
                width: 30px;
                height: inherit;
                background: inherit;
                left: 100%;
                border-radius: 0 2px 2px 0;
            }
        }
    }

    .img-wrapper {
        flex-shrink: 0;
        position: relative;
        height: 511px;
        width: 610px;
        overflow: hidden;

        > span {
            color: ${props => props.theme.colors.lightGray};
            font-family: 'Raleway', sans-serif;
            font-size: 36px;
            text-transform: uppercase;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: fit-content;
        }

        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
            opacity: ${props => !props.inStock ? .5 : 1}
        }
    }

    .description {
        margin-left: 3em;
        display: flex;
        flex-direction: column;
        gap: 1em;
        width: fit-content;
        font-family: 'Raleway', sans-serif;
        .title {
            font-size: 30px;
            display: flex;
            flex-direction: column;
            gap: .35em;

            .brand {
                font-weight: 600;
            }
        }

        .attributes {
            display: flex;
            flex-direction: column;
            gap: 1em;
        }
        .price {
            display: grid;
            gap: .5em;
            align-items: center;
            .price-title {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 800;
                text-transform: uppercase;
            }
            .price-value {
                font-size: 24px;
                font-weight: 800;
            }
        }
    
        button {
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.mainGreen};
            border: 0;
            font-family: 'Raleway', sans-serif;
            font-weight: 600;
            height: 52px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
            width: 290px;
            cursor: pointer;
            transition: 80ms ease-out;

            &:active {
                background: ${props => props.theme.colors.orange};
            }
        }

        .product-description {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 1.6;
            text-align: justify;
            max-width: 650px;
            color: ${props => props.theme.colors.mainDark};
        }
    }
`

export default ProductContainer;