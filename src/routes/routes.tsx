import Base from '@/pages/base';
import Tech from '@/pages/tech';
import Eval from '@/pages/eval';
import Service from '@/pages/service';
import Home from '@/pages/home/home';
import { ReactElement } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import HomeNew from '@/pages/homenew/home';

interface RouteItem {
    path: string;
    needLogin?: boolean;
    element: ReactElement;
}

const routes: RouteItem[] = [
    {
        path: '/',
        element: <HomeNew />,
    },
    {
        path: '/en',
        element: <HomeNew />,
    },
    {
        path: '/base',
        element: <Base />,
    },
    {
        path: '/tech',
        element: <Tech />,
    },
    {
        path: '/eval',
        element: <Eval />,
    },
    {
        path: '/service',
        element: <Service />,
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    },
];

const WrapperRoutes = () => {
    return useRoutes(
        routes.map((item: RouteItem) => {
            return item;
        }),
    );
};

export default WrapperRoutes;
