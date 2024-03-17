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
    z-index: 10;
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

export const BannerItem = styled.div`
    cursor: pointer;
    a{
        position: relative;
        &::after{
            content: "";
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            opacity: 0;
            color: white;
        }
        &:hover{
            &::after{
                opacity: 1;
                border: 100px double transparent;
                transition: all 0.5s cubic-bezier(0.94, 0.85, 0.1, 0.62) 0s;
            }
        }
    }
`;