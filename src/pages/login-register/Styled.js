import Styled from 'styled-components';

export const LoginWrapper = Styled.div`
.login__content{
  width: 750px;
  min-height: 670px;
    margin: auto;
  ul{
    margin: auto;
    width: max-content;
    display: flex;
    text-transform: capitalize;
    padding: 35px;
    font-size: 27px;
    font-weight: 600;
    li{
      padding: 0 14px;
      cursor: pointer;
      &:first-child{ 
        border-right: 1px solid rgba(0,0,0,1);
      }
     &.active{
      color: #ed59a0;
     }
    }
  }
}
@media (max-width: 576px) {
  .login__content{
    width: 100%;
    min-height: auto;
    ul{
      padding: 19px;
      font-size: 18px;
    }
  }
}
`;
