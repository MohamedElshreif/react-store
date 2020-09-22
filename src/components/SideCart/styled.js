import Styled from 'styled-components';

const CartWrapper = Styled.div`
  position: fixed;
  right: 0;
  height: 88%;
  width: 341px;
  top: 12%;
  z-index: 199;
  background: var(--mainwhite);
  transform:${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition : var(--mainTransition);
  .empty{
    height: 77%;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    font-size: 23px;
    font-weight: 100;
  }
  ul{
    padding: 20px;
    height: 77%;
    overflow: auto;
    .item{
      margin-bottom: 15px;
      .item__close{
        position: absolute;
        top: 0;
        right: 14px;
        font-size: 21px;
        color: #ed59a0;
      }
      .item__img{
        img{
          width: 100%;
        }
      }
      .item__info{
        padding-top: 35px;
        .name{
          font-size: 14px;
        }
        .count{
          font-size: 13px;
          letter-spacing: .8px;
          display: block;
          text-transform: uppercase;
    color: #555252;
        }
        .price{
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .8px;
          color: #555252;
        }
      }
    }
  }
  .total{
    padding: 20px;
    font-size: 21px;
    font-weight: 100;
    text-transform: uppercase;
  }
  .btns{
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    .view-cart{
    margin-bottom:15px;
    }
  }
  @media (max-width: 576px) {
    right: 0;
    height: calc(100% - 61px);
    width: 100%;
    top: 61px;
  .empty{
    height: 80%;
    letter-spacing: 1px;
    font-size: 17px;
  }
  ul{
    height: 80%;
    .item{
      .item__close{
        font-size: 18px;
      }
      .item__info{
        padding-top: 22px;
        .name{
          font-size: 13px;
        }
        .count{
          font-size: 12px;
        }
        .price{
          font-size: 12px;
        }
      }
    }
  }
  .total{
    font-size: 16px;
  }
  .btns{
    padding: 0px 20px;
    .view-cart{
    margin-bottom:15px;
    }
  }
  }
`;

export { CartWrapper };
