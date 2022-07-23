import styled from 'styled-components';

const Div = styled.div`
    font-family: 'Raleway', 'sans-serif';
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    height: fit-content;
    gap: 40px;
    background: ${props => props.theme.colors.white};
    position: absolute;
    right: 100px;
    max-height: 80%;
    overflow-y: auto;
    z-index: 4;
    padding: 2rem 1rem;
    /* Works on Firefox */
    
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.lightGray + ' ' + props.theme.colors.mainDark};

    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #EEE;
    }

    &::-webkit-scrollbar-thumb {
        background: #c6c7cc;
        border-radius: 20px;
        opacity: .5;
    }

    .cart-overlay__header {
        align-self: flex-start;
        >span {
            font-weight: 700;
        }
    }

    .cart-total {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-weight: 500;
        font-size: 16px;

        .price {
            font-weight: 700;
        }

    }

    .overlay-btns {
        flex-shrink: 0;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 43px;
        gap: 1em;

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
            font-size: 14px;
            font-family: 'Raleway', 'sans-serif';
            font-weight: 600;
            border: 0;
            background: none;
            width: 100%;
            text-transform: uppercase;
            transition: 100ms ease-in ease-in-out;
        }

        .view-bag-btn {
            color: ${props => props.theme.colors.mainDark};
            border: 1px ${props => props.theme.colors.mainDark} solid;
            &:active {
                background:  ${props => props.theme.colors.mainGreen};
                border:  none;
                color: ${props => props.theme.colors.white};
            }
        }

        .checkout-btn {
            background: ${props => props.theme.colors.mainGreen};
            color: ${props => props.theme.colors.white};
            &:active {
                background:  ${props => props.theme.colors.orange};
            }
        }
    }
`

export default Div;