import React from 'react';
import { Redirect } from 'react-router-dom';
import Index from '../views/index/index';
import About from '../views/about/index';
import Book from '../views/book/index';
import Detail from '../views/detail/index';
import User from '../views/user/index';

const routerList = [
    {
        path: '/',
        name: '首页',
        exact: true,
        render: () => {
            return <Redirect to="index" />
        }
    },
    {
        path: '/index',
        exact: true,
        render: () => {
            return <Index />
        }
    },
    {
        path: '/about',
        exact: true,
        render: () => {
            return <About />
        }
    },
    {
        path: '/book',
        exact: true,
        render: () => {
            return <Book />
        }
    },
    {
        path: '/detail',
        exact: true,
        render: () => {
            return <Detail />
        }
    },
    {
        path: '/user',
        exact: true,
        render: () => {
            return <User />
        }
    }
];

export default routerList;