import Styled from 'styled-components';

const TitleWrapper = Styled.div`
.text-title{
  text-align : ${(props) => props.position};
  font-weight: 400;
  text-transform: capitalize;
  font-size: 48px;
  margin: 0;
  color: #010101;
}
`;

export { TitleWrapper };
