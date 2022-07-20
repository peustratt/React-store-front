import styled from 'styled-components';

const CartPage = styled.div`
  ${props => props.theme.padding}
  margin-bottom: 50px;
  font-family: 'Raleway', 'sans-serif';

  >.page-title {
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 80px 0;
  }

  >.products {
    display: flex;
    flex-direction: column;
    gap: 3em;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 1px;
      background: #E5E5E5;
      position: absolute;
      bottom: -24px;
    }
    
    >div {
      position: relative;
      &::before {
        content: '';
        width: 100%;
        height: 1px;
        background: #E5E5E5;
        position: absolute;
        top: -24px;
      }
    }
  }

  .cart-summary {
    font-family: 'Raleway', 'sans-serif';
    line-height: 2;
    display: flex;
    gap: .5em;
    padding-top: 40px;
    width: fit-content;
    font-size: 24px;

    >div {
      display: flex;
      flex-direction: column;
    }

    >.topic {
      font-weight: 400;
      .total {
        font-weight: 500;
      }
    }
    >.values {
      font-weight: 700;
    }

  }
  .place-order {
    margin-top: 16px;
    border: 0;
    background: ${props => props.theme.colors.mainGreen};
    width: 279px;
    height: 43px;
    color: ${props => props.theme.colors.white};
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    transition: 80ms ease-out;

    &:active {
      background: ${props => props.theme.colors.orange};
    }
  }
`

export default CartPage;