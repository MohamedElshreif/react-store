import Styled from 'styled-components';

export const CartPageWrapper = Styled.div`
.cart--empty{
  min-height: 550px;
  text-align: center;
  display: flex;
  align-items: center;
  span{
    font-size: 130px;
    color: #ed59a0;
  }
  p{
    font-size: 22px;
    font-weight: 100;
  }
}
@media (max-width: 576px) {
  .cart--empty{
    min-height: 450px;
    display: flex;
    align-items: center;
    span{
      font-size: 100px;
    }
    p{
      font-size: 14px;
    }
  }
}
`;
