import React from 'react';
import {
  FooterWrapper,
  Email,
  InfoWrapper,
  Info,
  Rights,
} from './styled';
import emailIcon from '@/assets/icon-mail.png';

export const Footer = () => {
  return <FooterWrapper>
    <Email>
      <img width="60" height="60" src={emailIcon} alt="e-mail" />
      <button>Enviar E-mail</button>
    </Email>
    <InfoWrapper>
      <Info>
        <ul>
          <li>A Empresa</li>
          <li>Qualidade e Tecnologia</li>
          <li>Meio Ambiente</li>
          <li>Privacidade e Segurança</li>
          <li>Contato Institucional</li>
          <li>International Contact</li>
        </ul>
        <ul>
          <li>Vídeo Tutorial</li>
          <li>Escolha seu Produto</li>
          <li>Selecione suas Fotos</li>
          <li>Criando seu FotoProduto</li>
          <li>Pagamento</li>
          <li>Acompanhe seu Pedido</li>
          <li>Produção Gráfica</li>
          <li>Entrega, Prazos e Frete</li>
        </ul>
        <ul>
          <li>O que é um FotoLivro?</li>
          <li>O que é um FotoCalendário?</li>
        </ul>
        <ul>
          <li>Minha Conta</li>
          <li>Histórico de Pedidos</li>
          <li>Lista de Desejos</li>
          <li>Newsletter</li>
          <li>Mapa do Site</li>
          <li>Contate-nos</li>
        </ul>
      </Info>
      <Rights>Printástico - Todos os direitos reservados.</Rights>
    </InfoWrapper>
  </FooterWrapper>;
};