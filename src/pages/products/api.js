import Fotolivros520 from '@/assets/fotolivros-520x400.jpg';
import Fotolivros100 from '@/assets/fotolivros-100x100.jpg';

export const getProductDetail = (productId) => {
    if (productId === 'cartao-de-visitas') {
        return {
            name: 'Cartão de Visitas',
            mainImg: Fotolivros520,
            img: Fotolivros100,
            price: 'R$19,99',
            description: 'Cartão de Visitas',
            details: 'Detalhes do Cartão de Visitas.'
        };
    }

    return {
        name: 'FotoLivro',
        mainImg: Fotolivros520,
        img: Fotolivros100,
        price: 'R$49,99',
        description: 'FotoLivro',
        details: 'Detalhes do FotoLivro.'
    };
};