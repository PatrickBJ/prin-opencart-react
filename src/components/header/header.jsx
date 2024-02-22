import React from 'react';
import {
  HeaderWrapper,
  TopBar,
  NavBar,
  Logo,
} from './styled';
import logo from '@/assets/logo.png';

export const Header = () => {
  return <HeaderWrapper>
    <TopBar>
      Minha conta
      Lista de desejos
      Carrinho de compras
      Finalizar pedido
    </TopBar>
    <NavBar>
      <img width="218" height="65" src={logo} alt='logo' />
      Printastico
    </NavBar>
  </HeaderWrapper>;
};