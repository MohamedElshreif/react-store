import Styled from 'styled-components';

export const WrapperTotal = Styled.div`
    padding: 30px 0;
    padding-bottom: 0;
    div{
      display: flex;
      justify-content: flex-end;
      font-size: 25px;
      font-weight: 100;
      margin-bottom: 19px;
    }
    @media (max-width: 768px) {
    padding: 15px 0;
    div{
      font-size: 17px;
      margin-bottom: 5px;
      justify-content: flex-start;
      span{
        margin-left: 10px;
      }
    }
    }
`;
