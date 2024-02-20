import React from 'react';
import {
  HeaderWrapper,
  TopBar,
  NavBar,
  Logo,
} from './styled';

export const Header = () => {
  return <HeaderWrapper>
    <TopBar>
      Minha conta
      Lista de desejos
      Carrinho de compras
      Finalizar pedido
    </TopBar>
    <NavBar>
      <Logo alt='logo' />
      Printastico
    </NavBar>
  </HeaderWrapper>;
};