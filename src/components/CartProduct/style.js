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
      font-size: ${props => props.isOverlay ? '16px' : '30px'};
      font-family: 'Raleway', sans-serif;
      font-weight: 300;
      line-height: 1.6;

      >.brand {
        font-weight: 600;
      }

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
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      font-size: ${props => props.isOverlay ? '14px' : '28px'};
      width: ${props => props.isOverlay ? '24px' : '45px'};
      height: ${props => props.isOverlay ? '24px' : '45px'};
      border: 0;
      background: none;
      border: 1px solid #1D1F22;
    }
  }
  
  .img-wrapper {
    width: ${props => props.isOverlay ? '121px' : '200px'};
    height: ${props => props.isOverlay ? '190px' : '288px'};

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`

export default Div;