import styled from 'styled-components';
import footer from '@/assets/footer.jpg';

export const FooterWrapper = styled.div`
  border-top: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${footer});
  background-position: bottom center;
  background-repeat: no-repeat;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  align-items: center;
  button{
    margin-top: 30px;
    height: 45px;
    background: #00a9e7;
    padding: 14px 38px;
    color: white;
    border: none;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.6;
    &:hover{
      background: orange;
      cursor: pointer;
    }
  }
`;

export const InfoWrapper = styled.div`
  padding: 28px 0 22px ;
  padding-bottom: 22px;
`;

export const Info = styled.div`
  margin: 80px 0 50px 200px;
  display: flex;
  padding: 0 80px;
  ul{
    flex: 1;
    list-style-type: none;
    padding: 0 15px;
    li{
      font-size: 14px;
      line-height: 30px;
      font-weight: 600;
      &:hover{
        color: orange;
        cursor: pointer;
      }
    }
  }
`;

export const Rights = styled.div`
  margin-left: 270px;
  border-top: 1px solid lightgray;
  padding: 28px 0 22px 0;
  font-size: 13px;
  width: 100%;
`;