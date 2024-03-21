const navConfig = [
    {
        name: 'new in',
        path: '/collection/new',
    },
    {
        name: 'shop',
        path: '/collection/all',
        subNav: [
            {
                name: 'all',
                path: '/collection/all',
            },
            {
                name: 'tops',
                path: 'collection/tops',
                subNav: [
                    {
                        name: 'camisoles',
                        path: 'collection/tops/camisoles',
                    },
                    {
                        name: 't-shirt',
                        path: 'collection/tops/t-shirts',
                    },
                ],
            },
            {
                name: 'trousers',
                path: '/collection/trousers',
            },
            {
                name: 'skirts & shorts',
                path: '/collection/skirts',
            },
            {
                name: 'dresses & jumpsuits',
                path: '/collection/dresses-jumpsuits',
            },
        ],
    },
    {
        name: 'denim wear',
        path: '/collection/denim-wear',
    },
    {
        name: 'BINHÉ goods',
        path: '/collection/binhe-goods',
    },
];

export { navConfig };
