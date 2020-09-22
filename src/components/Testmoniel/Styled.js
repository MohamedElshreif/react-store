import Styled from 'styled-components';

export const Testmon = Styled.section`
    padding: 30px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin: 30px 0;
    border-top: 1px solid rgba(0,0,0,0.1);
    text-align:center;
    .img-conainer{
      width: 70px;
      height: 70px;
      overflow: hidden;
      margin: 25px auto;
      margin-top: 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .massege{
      width: 83%;
      line-height: 1.6;
      font-weight: 500;
      margin: auto;
      color: #555252;
      font-size: 14px;
    }
    .testmon__icon{
      margin: 13px 0;
      color: #555252;
      font-size: 20px;
    }
    .name{
      color: #555252;
    }
    span{
      font-size: 13px;
      font-weight: 500;
      color: #555252;
    }
    @media (max-width: 576px) {
    .img-conainer{
      width: 58px;
      height: 58px;
      margin: 20px auto;
    }
    .massege{
      width: 100%;
      font-size: 11px;
    }
    .testmon__icon{
      font-size: 19px;
    }
    .name{
      color: #555252;
      font-size: 20px;
    }
    }
`;
