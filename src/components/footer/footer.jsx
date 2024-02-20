import React from 'react';
import {
  FooterWrapper,
  Email,
  InfoWrapper,
  Info,
  Rights,
} from './styled';

export const Footer = () => {
  return <FooterWrapper>
    <Email>Enviar E-mail</Email>
    <InfoWrapper>
      <Info>Topicos</Info>
      <Rights>Printástico - Todos os direitos reservados.</Rights>
    </InfoWrapper>
  </FooterWrapper>;
};