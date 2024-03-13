import { PageHeader } from '@/components';
// import Fotolivros from '@/assets/fotolivros-263x263.jpg';
// import FotoLivroA4PaisagemCapaDuraFrente from '@/assets/FotoLivro-A4-Paisagem-Capa-Dura-Frente-263x263.jpg';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const { category, product } = useParams();

  return (
    <>
      <PageHeader title={product} url={`produtos/${category}`} />
    </>
  );
};
