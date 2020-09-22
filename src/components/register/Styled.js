import Styled from 'styled-components';

export const RegisterWrapper = Styled.div`
    width: 100%;
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.1);
    padding: 55px 0;
    padding-bottom: 50px;
    form{
    width: 75%;
    margin: auto;
    input{
        ::-webkit-input-placeholder{
            font-size:15px;
            text-transform: capitalize;
          }
        }
    }
    @media (max-width: 576px) {
        box-shadow: none;
        padding: 50px 0;
        padding-bottom: 45px;
        form{
        width: 90%;
        input{
            font-size:10px;
            font-weight: 100;
            ::-webkit-input-placeholder{
                font-size:10px;
                font-weight: 100;
              }
            }
        }

    }
`;
