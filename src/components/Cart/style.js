import styled from 'styled-components';

const CartPage = styled.div`
  padding: 0 100px;

  >.page-title {
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 80px 0 55px;
  }

  >.products {
    display: flex;
    flex-direction: column;
    gap: 2em;
    
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
`

export default CartPage;