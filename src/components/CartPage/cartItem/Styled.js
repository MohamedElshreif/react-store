import Styled from 'styled-components';

export const Item = Styled.section`
  padding: 21px 15px;
  box-sizing: border-box;
  font-size: 15px !important;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  .product_image{
    height: 143px;
    width: 100px;
  img{
    width: 100%;
    height: 100%;
  }
  }
  .product_name{
    
    h3{
      font-weight: 500;
    color: #333;
      font-size: inherit;
    }
  }
  .product_price{
    font-weight: 500;
    color: #333;
  }
  .product_total{
    font-weight: 500;
    color: #333;
  }
  .product_remove{
    font-size: 25px;
      margin-left: 30px;
      color:#ed59a0;
      cursor: pointer;
  }
@media (max-width: 768px) {
  padding: 5px 5px;
  border-bottom:none;
  margin-bottom : 15px;
  font-size: 13px;
  border: 1px solid rgba(0,0,0,0.07);
  .remove{
    position: absolute;
    top: 0px;
    right: 19px;
    font-size: 20px;
    color:#ed59a0;
    cursor: pointer;
  }
  .product_image{
    height: auto;
  }
  .product_name{
    h3{
      font-weight: 100;
      letter-spacing: 1px;
    }
  }
  .product_price{
    font-weight: 100;
  }
  .product_total{
    font-weight: 100;
  }
  .product_remove{
    font-size: 25px;
      margin-left: 30px;
      color:#ed59a0;
      cursor: pointer;
  }
}

`;
