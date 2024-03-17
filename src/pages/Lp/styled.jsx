import styled from 'styled-components';

export const SliderStyle = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 656px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
        div{
            opacity: 1;
        }
    }
`;

export const SlideNavigator = styled.div`
    opacity: 0;
    position: absolute;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    background: #fff;
    color: #333;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    &:hover{
        background: #00a9e7;
        color: #fff;
    }
`;

export const SlideBullets = styled.div`
    position: absolute;
    height: 13px;
    bottom: 20px;
    display: flex;
    gap: 7px;
    div{
        width: 13px;
        border-radius: 4px;
        background: #898989;
        &.active{
            background: lightgray;
        }
        &:hover{
            background: lightgray;
        }
    }
`;