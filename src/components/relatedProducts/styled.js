import Styled from 'styled-components';

export const RelatedWrapper = Styled.div`
  .related__head{
    h2{
      font-size: 35px;
      font-weight: 100;
     }
    }
  .relted_products{
    margin-top: 50px;
    }
    margin-top: 85px;
    text-align: center;
    @media (max-width: 576px) {
      .related__head{
        h2{
          font-size: 26px;
         }
        }
      .relted_products{
        margin-top: 30px;
        }
        margin-top: 50px;
    }
`;
