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
        font-weight: ${props => props.isOverlay ? '500' : '700'};
        font-size: ${props => props.isOverlay ? '16px' : '24px'};
      }
    }
  }

  .btns-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    >button {
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
      border: 1px solid ${props => props.theme.colors.mainDark};
    }
    >span {
      font-weight: 500;
      font-size: ${props => props.isOverlay ? '16px' : '24px'};
    }
  }

  .img-wrapper {
    position: relative;
    width: ${props => props.isOverlay ? '121px' : '200px'};
    height: ${props => props.isOverlay ? '190px' : '288px'};

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }

    >.next-previous-wrapper {
      display: flex;
      gap: 8px;
      position: absolute;
      bottom: 1em;
      right: 1em;
    }

    button {
      border: 0;
      background: #000000;
      opacity: .77;
      color: ${props => props.theme.colors.white};
      width: 24px;
      height: 24px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Raleway', 'sans-serif';
    }
  }
`

export default Div;