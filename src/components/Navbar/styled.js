import Styled from 'styled-components';

const NavContent = Styled.section`
position: sticky;
background:#fff;
box-shadow: 0px 1px 4px 0 rgba(0,0,0,0.1);
  top:0;
  left:0;
  width:100%;
  z-index : 200;
  header{
    .header__rowNav{
      border-bottom: 1px solid rgba(0,0,0,0.1);
      h2{
        color: #ed59a0;
        margin:0
      }
      ul{
        li{
          margin: 0 20px;
          .link-nav{
            text-transform: capitalize;
          }
        }
      }
      
      .icon{
        margin-left: 18px;
        font-size: 20px;
        position:relative;
        cursor:pointer;
        .count{
          right: -9px;
          position: absolute;
          background: #ed59a0;
          color: #fff;
          font-size: 13px;
          width: 19px;
          height: 19px;
          border-radius: 50%;
          top: -3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  @media (max-width: 768px) {
  header{
    .header__rowNav{
      h2{
        font-size: 24px;
      }
      .link-nav{
        font-size: 14px;
      }
      .dropdown {
        width: 100%;
        background: #fff;
        position: absolute;
        top: 100%;
        left: 0;
        transition: all 0.3s ease-in-out;
        height: max-content;
        transform: rotateY(90deg);
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.03);
        font-size: 14px;
        ul{
          padding: 0 25px;
          li{
            padding: 13px 12px;
            margin: 0;
            width: 100%;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            text-align: center;
            &:last-child{
              border: none;
            }
          }
        }
      }
      .active{
        transform: rotateY(0);
      }

      .icon{
        margin-left: 13px;
        font-size: 15px;
        .count{
          font-size: 11px;
          width: 17px;
          height: 17px;
        }
      }
    }
  }
  }

`;
export { NavContent };
