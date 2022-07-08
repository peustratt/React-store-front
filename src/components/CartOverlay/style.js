import styled from 'styled-components';

const Div = styled.div`
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
    z-index: 2;
    padding: 2rem 1rem;

    .cart-total {
        display: flex;
        justify-content: space-between;
        width: 100%;
        font-family: 'Raleway', 'sans-serif';
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
        }

        .view-bag-btn {
            color: ${props => props.theme.colors.mainDark};
            border: 1px ${props => props.theme.colors.mainDark} solid;
        }

        .checkout-btn {
            background: ${props => props.theme.colors.mainGreen};
            color: ${props => props.theme.colors.white};
        }
    }
`

export default Div;