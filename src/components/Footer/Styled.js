import Styled from 'styled-components';

const FooterWrapper = Styled.div`
    padding: 60px 0;
    background-color: #f6f6f8;
    p{
      color: #313131;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }
    .copyright{
      .footer-logo{
      h2{
        color: #ed59a0;
      }
      }
    }
    .subscribe-style{
      p{
        color: #7a7a7a;
        margin: 0 0 20px;
      }
    }
    .footer-title{
      font-size: 16px;
      font-weight: 500;
      line-height: 1;
      margin: 0 0 16px;
      color: #313131;
    }
    .footer-widget{
      color: #5d5d5d;
      .footer-list{
        li{
          margin: 0 0 11px;
          a{
            font-size: 14px;
        font-weight: 400;
    }
          }
        }
      }
    }
    form{
      input{
        width: 100%;
        background: transparent;
        border: none;
        padding: 13px 10px;
        outline: none;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
    }
    @media (max-width: 768px) {
    padding: 40px 0;
    p{
      font-size: 13px;
    }
    .copyright{
      margin-bottom: 20px;
      .footer-logo{
        h2{
          color: #ed59a0;
          font-size: 26px;
        }
      }
    }
    .subscribe-style{
      p{
        color: #7a7a7a;
        margin: 0 0 20px;
      }
    }
    .footer-title{
      font-size: 16px;
      margin: 0 0 8px;
    }
    .footer-widget{
      margin-bottom:10px;
      padding-bottom:10px;
      .footer-list{
        li{
          margin: 0 0 1px;
          a{
            font-size: 13px;
    }
          }
        }
      }
    }
    form{
      input{
        font-size: 13px;
      }
      ::-webkit-input-placeholder{
        text-transform: capitalize;
        color: rgba(0,0,0,0.1);
        font-size: 13px;
      }
    }
    }
`;

export { FooterWrapper };
