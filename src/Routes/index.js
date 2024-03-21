import React from 'react';
import { routesPath } from '../configs/routes';

const AboutPage = React.lazy(() => import('../Pages/About'));
const ContactPage = React.lazy(() => import('../Pages/ContactPage'));
const WomenPage = React.lazy(() => import('../Pages/WomenPage'));
const MenPage = React.lazy(() => import('../Pages/MenPage'));
const ShopPage = React.lazy(() => import('../Pages/ShopPage'));
const HomePage = React.lazy(() => import('../Pages/Home'));
const ProductPage = React.lazy(() => import('../Pages/ProductPage'));

//
const DenimPage = React.lazy(() => import('../Pages/DenimPages'));
const GoodsPage = React.lazy(() => import('../Pages/GoodsPage'));
const NewInPage = React.lazy(() => import('../Pages/NewInPage'));

//
const CamisolesPage = React.lazy(() => import('../Pages/CamisolesPage'));
const DressesPage = React.lazy(() => import('../Pages/DressesPage'));
const ShirtPage = React.lazy(() => import('../Pages/ShirtPage'));
const SkirtPage = React.lazy(() => import('../Pages/SkirtsPage'));
const TopsPage = React.lazy(() => import('../Pages/TopsPage'));
const TrouserPage = React.lazy(() => import('../Pages/TrousersPage'));

export const publicRoutes = [
    {
        path: routesPath.homePath,
        component: HomePage,
    },
    {
        path: routesPath.womenPath,
        component: WomenPage,
    },
    {
        path: routesPath.menPath,
        component: MenPage,
    },
    {
        path: routesPath.aboutPath,
        component: AboutPage,
    },
    {
        path: routesPath.contactPath,
        component: ContactPage,
    },
    {
        path: routesPath.productPath,
        component: ProductPage,
    },
    //
    {
        path: routesPath.denimPath,
        component: DenimPage,
    },
    {
        path: routesPath.goodsPath,
        component: GoodsPage,
    },
    {
        path: routesPath.newInPath,
        component: NewInPage,
    },
];

export const routess = {
    home: '/',
    collection: {
        url: 'collection/',
        path: {
            newIn: 'new',
            shop: 'all',
            denimWear: 'denim-wear',
            goods: 'binhe-goods',
        },
    },
    product: '/product/:itemname',
};

export const shopChildRoute = {
    all: 'all',
    top: 'tops',
    trouser: 'trousers',
    skirts: 'skirts',
    dresses: 'dresses-jumpsuits',
};

export const topChildRoute = {
    camisole: 'camisoles',
    shirts: 't-shirts',
};

export const testingRoutes = {
    primaryPath: '/collection',
    allPath: '/collection',
    topPath: 'tops',
    shirtPath: 't-shirts',
    camisolePath: 'camisoles',
    dressesPath: 'dresses-jumpsuits',
    skirtPath: 'skirtss',
    trouserPath: 'trousers',
};

export const nestedPublicRoutes = {
    path: '/collection',
    component: ShopPage,
    childPath: [
        {
            path: '/collection',
            component: ShopPage,
        },
        {
            path: 'tops',
            component: TopsPage,
            childPath: [
                {
                    path: 't-shirt',
                    component: ShirtPage,
                },
                {
                    path: 'camisoles',
                    component: CamisolesPage,
                },
            ],
        },
        {
            path: 'dresses-jumpsuits',
            component: DressesPage,
        },
        {
            path: 'skirts',
            component: SkirtPage,
        },
        {
            path: 'trousers',
            component: TrouserPage,
        },
    ],
};

export default publicRoutes;
