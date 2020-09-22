import Styled from 'styled-components';

export const WrapperCart = Styled.section`
min-height: 520px;
padding-top: 90px ;
.cart__content{
  border: 1px solid rgba(0,0,0,0.07);
  .cart__list{
    h2{
      text-transform: capitalize;
      font-size: 18px;
      margin: 0;
      color: #4b4e4b;
      font-weight: 100;
    }
  }
}
@media (max-width: 768px) {
  min-height: 300px;
  padding-top: 30px ;
  .cart__content{
    border:none;
  }
}
`;
