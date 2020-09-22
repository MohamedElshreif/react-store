import Styled from 'styled-components';

export const ProDetails = Styled.section`
padding:25px 15px;
    .proDetails_img{
      height: auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .proDetails_info{
      font-weight: 300;
      span{
        font-weight: 400;
      }
      .title{
        font-size: 18px;
        line-height: 1;
        text-transform: capitalize;
        margin: 0;
        font-weight: 300;
        color: #010101;
      }
      .model{
        font-size: 13px;
        line-height: 1;
        text-transform: capitalize;
        margin: 0;
        color: #010101;
      }
      .price{
        font-size: 17px;
        text-transform: capitalize;
        margin: 7px 0 6px;
        color: #fe5252;
      }
      .list-stars{
        display: flex;
        font-size: 13px;
        width: max-content;
        color: #ffa900;
        margin: 11px 0 5px;
      }
      .desc{
        font-size: 13px;
        line-height: 28px;
        margin: 0;
        color: #333;
      }
      .btns{
        padding-top: 30px;
        margin-top: 26px;
        border-top: 1px solid rgba(0,0,0,0.1);
        span{
          font-size: 25px;
          margin-left: 20px;
        }
      }
    }
`;
