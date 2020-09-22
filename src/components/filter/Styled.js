import Styled from 'styled-components';

export const FilterWrapper = Styled.section`
.filter_content{
  height: max-content;
  position: sticky;
  top: 100px;
}
.filter__search{
  form{
    position: relative;
    input{
      border: 1px solid rgba(0,0,0,0.1);
      text-transform: capitalize;
      padding: 13px 15px;
      box-sizing: border-box;
      width: 100%;
      outline: none;
      font-size: 14px;
    }
    button{
      border: none;
      background: transparent;
      position: absolute;
      right: 0px;
      padding: 0 15px;
      top: 50%;
      color: #555;
      border-left: 1px solid rgba(0,0,0,.1);
      transform: translateY(-50%);
    }
  }
}
.filter__Categories{
  border: 1px solid rgba(0,0,0,0.1);
  padding: 15px;
  padding-bottom:0;
  h4{
    font-size: 17px;
    font-weight: 500;
    margin: 0;
    padding-bottom: 15px;
    color: #333;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      .input_filter {
        align-items: center;
        display: flex;
        width: 85%;
      }
      span {
        font-size: 12px;
        color: #333;
      }
      input {
        margin-right: 10px;
        cursor: pointer;
      }
      .input-wrapper {
        position: relative;
        padding-left: 31px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 175px;
        .input {
          display: none;
        }
        label {
          font-size: 14px;
          text-transform: capitalize;
          color: #333;
          letter-spacing: 1px;
          cursor: pointer;
          margin: 0;
        }
        .input-label {
          width: 22px;
          height: 22px;
          position: absolute;
          top: 50%;
          transition: All 0.2s ease-in-out;
          left: 0;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.1);
          color: #fff;
          border-radius: 3px;
          font-size: 14px;
          transform: translateY(-50%);
          margin-bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          &::after {
            content: '';
            font-family: 'Font Awesome 5 Free';
            font-weight: 300;
            color: #fff;
            font-size: 10px;
          }
        }
        .input:checked ~ .input-label {
          background: #ed59a0;
          border: 1px solid #ed59a0;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  transform: translateX(-100%);
  .filter_content{
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 111;
  }
  .filter__search{
    form{
      position: relative;
      input{
        border: 1px solid rgba(0,0,0,0.1);
        text-transform: capitalize;
        padding: 13px 15px;
        box-sizing: border-box;
        width: 100%;
        outline: none;
        font-size: 14px;
      }
      button{
        border: none;
        background: transparent;
        position: absolute;
        right: 0px;
        padding: 0 15px;
        top: 50%;
        color: #555;
        border-left: 1px solid rgba(0,0,0,.1);
        transform: translateY(-50%);
      }
    }
  }
  .filter__Categories{
    border: 1px solid rgba(0,0,0,0.1);
    padding: 15px;
    padding-bottom:0;
    h4{
      font-size: 17px;
      font-weight: 500;
      margin: 0;
      padding-bottom: 15px;
      color: #333;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      li {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        .input_filter {
          align-items: center;
          display: flex;
          width: 85%;
        }
        span {
          font-size: 12px;
          color: #333;
        }
        input {
          margin-right: 10px;
          cursor: pointer;
        }
        .input-wrapper {
          position: relative;
          padding-left: 31px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          min-width: 175px;
          .input {
            display: none;
          }
          label {
            font-size: 14px;
            text-transform: capitalize;
            color: #333;
            letter-spacing: 1px;
            cursor: pointer;
            margin: 0;
          }
          .input-label {
            width: 22px;
            height: 22px;
            position: absolute;
            top: 50%;
            transition: All 0.2s ease-in-out;
            left: 0;
            background: #fff;
            border: 1px solid rgba(0,0,0,0.1);
            color: #fff;
            border-radius: 3px;
            font-size: 14px;
            transform: translateY(-50%);
            margin-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            &::after {
              content: '';
              font-family: 'Font Awesome 5 Free';
              font-weight: 300;
              color: #fff;
              font-size: 10px;
            }
          }
          .input:checked ~ .input-label {
            background: #ed59a0;
            border: 1px solid #ed59a0;
          }
        }
      }
    }
  }
}
`;
