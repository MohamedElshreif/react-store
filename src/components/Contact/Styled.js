import Styled from 'styled-components';

export const WrapperContact = Styled.div`
input , textarea{;
  outline: none;
  font-weight: 100;
  ::-webkit-input-placeholder{
    font-size:15px
  }
}
textarea{
  resize: none;
}
.contact__info{
  li{
    display: flex;
    margin-bottom: 30px;
    .icon{
      margin-right: 20px;
      font-size: 30px;
    }
    .text{
      font-size: 15px;
      color: #404040;
      display: flex;
      align-items: center;
    }
  }
}

@media (max-width: 576px) {
  input , textarea{;
    border-radius: 0;
    font-size: 12px;
  }
  .contact__info{
    li{
      margin-bottom: 6px;
      .icon{
        font-size: 21px;
      }
      .text{
        font-size: 12px;
      }
    }
  }
  
}
`;
