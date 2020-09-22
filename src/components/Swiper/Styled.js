import Styled from 'styled-components';

const InterFace = Styled.section`
 overflow : hidden;
 position: relative;
 height : max-content;
 .overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 10;
 }
 .interface__text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1171px;
  z-index: 11;
   h1{
    color: #222;
    font-size: 75px;
    font-weight: 500;
    margin: 0 0 28px;
    line-height: 1.3;
    letter-spacing: 1px;
   }
 }
 ul{
  padding: 0;
  margin: 0;
  list-style: none;
  li{
    height: calc(100vh - 87px);
    img{
      width:100%;
      height:100%
    }
  }
 }
 @media (max-width: 768px) {
  .interface__text{
   width: 100%;
   padding : 0 15px;
    h1{
     font-size: 30px;
     line-height: 1.5;
    }
  }
  ul{
   li{
     height: calc(100vh - 61px);
   }
  }
 }
 @media (max-width: 576px) {
  .interface__text{
   width: 100%;
   padding : 0 15px;
    h1{
     font-size: 30px;
     line-height: 1.5;
    }
  }
  ul{
   li{
     height: 60vh;
   }
  }
 }
`;

export { InterFace };
