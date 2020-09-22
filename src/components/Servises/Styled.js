import Styled from 'styled-components';

const BannerWrapper = Styled.div`
    padding:80px 0;
    .banner__column{
      height: 630px;
      position: relative;
    }
    .banner__single{
      height:50%;
      box-sizing: border-box;
      position: relative;
    }
    .banner_text{
      .price{
        color: #ed59a0;
        font-size: 20px;
      }
      h2{
        color: #ed59a0;
        font-size: 41px;
        font-weight: 700;
        margin-bottom: 0;
      }
      p{
        font-size: 27px;
        text-transform: capitalize;
      }
    }
    .banner-left{
      position: absolute;
      top: 30px;
      left: 50px;
    }
    .banner-right{
      position: absolute;
      bottom: 27px;
      right: 61px;
    }
    img{
      height:100%;
      width:100%
    }
    .banner_icon{
      font-size: 40px;
      color: #ed59a0;
    }
    h3{
      font-weight: 600;
      font-size: 29px;
      margin-bottom: 0;
    }
    .start{
      font-size: 18px;
      text-transform: capitalize;
      display: block;
      span{
        color: #ed59a0;
      }
    }
    @media (max-width: 768px) {
      padding:40px 0;
      .banner__column{
        height:auto;
      }
      .banner__single{
        &:first-child{
          margin-top:22px
        }
      }
      .banner_text{
        .price{
         
          font-size: 15px;
        }
        h2{
          
          font-size: 30px;
          
        }
        p{
          font-size: 20px;
         
        }
      }
      .banner_icon{
        font-size: 35px;
      }
      h3{
        font-size: 24px;
      }
      .start{
        font-size: 17px;
      }
    }
    @media (max-width: 576px) {
      padding:40px 0;
      .banner__column{
        height:auto;
      }
      .banner__single{
        &:first-child{
          margin-top:22px
        }
      }
      .banner_text{
        .price{
         
          font-size: 15px;
        }
        h2{
          
          font-size: 30px;
          
        }
        p{
          font-size: 20px;
         
        }
      }
      .banner_icon{
        font-size: 35px;
      }
      h3{
        font-size: 24px;
      }
      .start{
        font-size: 17px;
      }
    }
`;

export { BannerWrapper };
