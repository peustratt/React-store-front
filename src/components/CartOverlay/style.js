import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: fit-content;
    height: fit-content;
    gap: 40px;
    background: #fff;
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
    }

    .overlay-btns {
        flex-shrink: 0;
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 43px;
        gap: 1em;

        button {
            border: 0;
            background: none;
            width: 100%;
            text-transform: uppercase;
        }

        .view-bag-btn {
            color: #1D1F22;
            border: 1px #1D1F22 solid;
        }

        .checkout-btn {
            background: #5ECE7B;
            color: #fff;
        }
    }
`

export default Div;