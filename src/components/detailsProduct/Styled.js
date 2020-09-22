import Styled from 'styled-components';

export const ProDetails = Styled.section`
padding:25px 15px;
    .proDetails_img{
      height: 600px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .proDetails_info{
      height: 600px;
      font-weight: 300;
      padding-left:40px;
      span{
        font-weight: 400;
        cursor: pointer;
      }
      .title{
        font-size: 22px;
        line-height: 1;
        text-transform: capitalize;
        margin: 0;
        font-weight: 300;
        color: #010101;
        letter-spacing: 1px;
      }
      .model{
        font-size: 18px;
        line-height: 1;
        text-transform: capitalize;
        margin: 0;
        color: #010101;
        letter-spacing: 1px;
      }
      .price{
        font-size: 21px;
        text-transform: capitalize;
        margin: 7px 0 6px;
        color: #fe5252;
        letter-spacing: 1px;
      }
      .list-stars{
        display: flex;
        font-size: 22px;
        width: max-content;
        color: #ffa900;
        margin: 11px 0 5px;
      }
      .desc{
        font-size: 15px;
        line-height: 28px;
        margin: 0;
        color: #333;
      }
      .btns{
        padding-top: 45px;
        margin-top: 26px;
        border-top: 1px solid rgba(0,0,0,0.1);
        display: flex;
        .count,.button{
          margin-right: 30px;
        }
        .wishlist{
          font-size: 25px;
        }
      }
      .socailMedia{
        font-size: 19px;
        margin-top: 30px;
        span{
          font-weight: 400;
          margin-right: 23px;
          cursor: pointer;
        }
      }
    }
    @media (max-width: 768px) {
    padding:10px 10px;
    .proDetails_img{
      height: auto;
    }
    .proDetails_info{
      height: auto;
      padding-top: 30px;
      padding-left:0;
      .title{
        font-size: 15px;
      }
      .model{
        font-size: 10px;
      }
      .price{
        font-size: 14px;
      }
      .list-stars{
        font-size: 12px;
      }
      .desc{
        font-size: 12px;
      }
      .btns{
        padding-top: 20px;
        .count,.button{
          margin-right: 15px;
        }
        .wishlist{
          font-size:20px;
        }
      }
      .socailMedia{
        font-size: 18px;
      }
    }
    }
`;
