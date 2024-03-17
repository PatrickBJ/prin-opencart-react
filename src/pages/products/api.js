import Fotolivros from '@/assets/fotolivros-263x263.jpg';
import FotoLivroA4PaisagemCapaDuraFrente from '@/assets/FotoLivro-A4-Paisagem-Capa-Dura-Frente-263x263.jpg';
import Fotolivros520 from '@/assets/fotolivros-520x400.jpg';
import Fotolivros100 from '@/assets/fotolivros-100x100.jpg';

export const getProductList = (category, subcategory) => {
    if (category === 'fotos') {
        return [
            {
                id: 96867,
                name: 'Cartão de Visitas',
                price: 'R$19,99',
                img: Fotolivros,
                detailUrl: '/produto/cartao-de-visitas'
            },
            {
                id: 96866,
                name: 'FotoLivro',
                price: 'R$49,99',
                img: FotoLivroA4PaisagemCapaDuraFrente,
                detailUrl: '/produtos/fotolivro'
            }
        ];
    }
    if (category === 'cartoes') {
        return [
            {
                id: 96867,
                name: 'Cartão de Visitas',
                price: 'R$19,99',
                img: Fotolivros,
                detailUrl: '/produto/cartao-de-visitas'
            }
        ];
    }

    if (category === 'foto-livros') {
        return [
            {
                id: 96866,
                name: 'FotoLivro',
                price: 'R$49,99',
                img: FotoLivroA4PaisagemCapaDuraFrente,
                detailUrl: '/produtos/fotolivro'
            }
        ];
    }

    return [
        {
            id: 1,
            name: 'Cartão de Visitas 1',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 2,
            name: 'Cartão de Visitas 2',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 3,
            name: 'Cartão de Visitas 3',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 4,
            name: 'Cartão de Visitas 4',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 5,
            name: 'Cartão de Visitas 5',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 6,
            name: 'Cartão de Visitas 6',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 7,
            name: 'Cartão de Visitas 7',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 8,
            name: 'Cartão de Visitas 8',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 9,
            name: 'Cartão de Visitas 9',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        },
        {
            id: 10,
            name: 'Cartão de Visitas 10',
            price: 'R$19,99',
            img: Fotolivros,
            detailUrl: '/produto/cartao-de-visitas'
        }
    ];
};

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