import Styled from 'styled-components';

export const CountWrapper = Styled.div`
  display: flex;
  border: 1px solid rgba(0,0,0,0.1);
  width: 107px;
  justify-content: space-between;
  padding: ${(props) => (props.padding ? props.padding : '10px 0')} ;
  font-size: 15px;
  .increment{
    border-right: 1px solid rgba(0,0,0,0.1);
    padding: 0 8px;
    cursor: pointer;
  }
  .decrement{
    border-left: 1px solid rgba(0,0,0,0.1);
    padding: 0 8px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 85px;
    font-size: 10px;
  }
`;
