import Styled from 'styled-components';

export const But = Styled.button`
  color : ${(props) => props.color};
  background : ${(props) => props.background};
  font-size : ${(props) => props.font};
  border : ${(props) => props.border};
  padding: ${(props) => (props.padding ? props.padding : '13px 32px')};
  text-transform: capitalize;
  outline: none;
  &:focus{
    outline: none;
  }
`;
