import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  width: 100%;
  gap: .3em;

  .main-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-right: auto;
    .header {
      padding-top: 2px;
      font-size: 16px;
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      line-height: 1.6;

      .item-price {
        font-weight: 500;
        font-size: 16px;
      }
    }
  }

  .btns-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      width: 24px;
      height: 24px;
      border: 0;
      background: none;
      border: 0.15em solid #1D1F22;
    }
  }
  
  .img-wrapper {
    width: 121px;
    height: 190px;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`

export default Div;