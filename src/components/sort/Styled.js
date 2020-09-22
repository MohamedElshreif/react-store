import Styled from 'styled-components';

export const SortWrapper = Styled.div`
.select--container{
  width: 220px;
  color: #495057;
 .form-control {
  height: 49px;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 0;
  font-weight: 100;
 }
}
span{
  margin-left: 9px;
  font-size: 22px;
  cursor: pointer;
}
.active{
  color : #ed59a0
}
@media (max-width: 768px) {
  .select--container{
    width: 240px;
    font-size: 13px;
   .form-control {
    height: 43px;
   }
  }
  
}
`;
