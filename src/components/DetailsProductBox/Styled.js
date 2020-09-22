import Styled from 'styled-components';

export const ModalProduct = Styled.section`
    position:fixed;
    height:100%;
    width:100%;
    top:0;
    left:0;
    z-index:220;
    display:${(props) => (props.display ? 'block' : 'none')};
    .product__modal{
      position:absolute;
      top:0;
      left:0;
      background : rgba(0,0,0,0.4);
      height:100%;
      z-index:22;
      width:100%
    }
    .product__details{
      
      width: 1200px;

        background: #fff;
        z-index: 222;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .prodct__details__head{
          padding: 16px;
        text-align: right;
        font-size: 30px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        }
    }
    @media (max-width: 768px) {
    .product__details{
        width: 90%;
        height:95%;
        .prodct__details__head{
          padding: 5px 8px;
          font-size: 21px;
        }
    }
    }

`;
