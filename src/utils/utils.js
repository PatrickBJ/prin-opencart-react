export const generateTitle = (url) => {
  switch (url) {
    case 'privacidade-e-seguranca': return 'Privacidade e Segurança';
    case 'video-tutorial': return 'Vídeo Tutorial';
    case 'criando-seu-fotoproduto': return 'Criando seu FotoProduto';
    case 'producao-grafica': return 'Produção Gráfica';
    case 'entrega-prazos-frete': return 'Entrega | Prazos | Frete';
    case 'fotolivros': return 'FotoLivros';
    case 'calendarios': return 'Calendários';
    case 'contato': return 'Entre Em Contato';
    default: return url.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
};