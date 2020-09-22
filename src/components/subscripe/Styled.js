import Styled from 'styled-components';

export const Sub = Styled.section`
  padding:60px 0;
  text-align: center;
  p{
    color: #555252;
    margin-top:5px;
    font-weight: 100;
  }
  form{
    width: 560px;
    margin: auto;
    margin-top: 28px;
  input{
    width: 100%;
    padding: 15px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 30px;
    text-align: center;
    text-transform: capitalize;
    font-size: 13px;
  }
  ::-webkit-input-placeholder{
    text-transform: capitalize;
    color: rgba(0,0,0,0.1);
  }
  }
  @media (max-width: 576px) {
    padding:40px 0;
    .text-title{
      font-size: 31px;
    }
    p{
      font-size: 13px;
    }
    form{
      width: auto;
    }
  }
`;
