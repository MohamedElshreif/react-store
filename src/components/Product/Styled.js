import Styled from 'styled-components';

const ProductWrapper = Styled.div`
  .product{
    margin-bottom:28px;
    text-align:left;
    .product__image{
      height: auto;
      overflow: hidden;
      display: flex;
      position:relative;
      .pink{
        position: absolute;
        top: 11px;
        right: 14px;
        padding: 3px 12px;
        color: #fff;
        border-radius: 5px;
        font-size: 11px;
        background: #ed59a0;
      }
      ul{
        position: absolute;
        padding: 0;
        top: 50%;
        margin: 0;
        list-style: none;
        display: flex;
        width: max-content;
        transform: translate(-50%, -50%);
        left: 50%;
        li{
          margin: 0 4px;
          span{
            width: 40px;
            height: 40px;
            background: #ed59a0;
            display: flex;
            color: #fff;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            transform: rotateY(90deg);
            transition: all 0.4s linear;
            cursor: pointer;
          }
        }
      }
      img{
        width: 100%;
        height: 100%;
        transition: all 0.4s linear;
      }
      .img{
        transform: translateX(0%);
      }
      .hover--img{
        transform: translateX(7%);
      }
    }
    .product__info{
      padding-top:14px;
.title{
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  cursor: pointer;
  .title__text{
    font-size: 16px;
    color: #000;
    letter-spacing: 1px;
    font-weight: 300;
  }
  .title__icon{
    color: #929292;
  }
}
.price{
  letter-spacing: 2px;
    color: #ed59a0;
}
    }
    &:hover{
      .img{
        transform: translateX(-100%);
      }
      .hover--img{
        transform: translateX(-100%);
      }
      ul{
        li{
          span{
            transform: rotateY(0);
          }
        }
      }
    }
  }
`;

export { ProductWrapper };
