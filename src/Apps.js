import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { publicRoutes, testingRoutes, routess, shopChildRoute, topChildRoute } from './Routes';
import MainLayout from './layouts/MainLayout';
import ScrollTop from './Utils/ScrollTop';
import { routesPath } from './Routes';
import HomePage from './Pages/Home';
import NewInPage from './Pages/NewInPage';
import DenimPage from './Pages/DenimPages';
import GoodsPage from './Pages/GoodsPage';
import TopsPage from './Pages/TopsPage';
import TrousersPage from './Pages/TrousersPage';
import SkirtsPage from './Pages/SkirtsPage';
import DressesPage from './Pages/DressesPage';
import ShirtPage from './Pages/ShirtPage';
import ProductPage from './Pages/ProductPage';

const ShopPage = React.lazy(() => import('./Pages/ShopPage'));
const CamisolesPage = React.lazy(() => import('./Pages/CamisolesPage'));

function App() {
    const Layout = MainLayout;

    return (
        <div id="App">
            <BrowserRouter>
                <ScrollTop />
                <Routes>
                    <Route path={routess.home} element={<Layout />}>
                        <Route path={routess.home} element={<HomePage />}></Route>

                        <Route path={routess.collection.url}>
                            <Route path={routess.collection.path.newIn} element={<NewInPage />}></Route>
                            <Route path={routess.collection.path.shop} element={<ShopPage />}></Route>
                            <Route path={routess.collection.path.denimWear} element={<DenimPage />}></Route>
                            <Route path={routess.collection.path.goods} element={<GoodsPage />}></Route>

                            <Route path={shopChildRoute.all} element={<ShopPage />}></Route>

                            <Route path={shopChildRoute.top} element={<TopsPage />}>
                                <Route path={topChildRoute.camisole} element={<CamisolesPage />}></Route>
                                <Route path={topChildRoute.shirts} element={<ShirtPage />}></Route>
                            </Route>

                            <Route path={shopChildRoute.trouser} element={<TrousersPage />}></Route>
                            <Route path={shopChildRoute.skirts} element={<SkirtsPage />}></Route>
                            <Route path={shopChildRoute.dresses} element={<DressesPage />}></Route>
                        </Route>

                        <Route path={routess.product} element={<ProductPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
