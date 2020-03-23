import React from 'react';
import { Redirect } from 'react-router-dom';
import Index from '../views/index/index';
import About from '../views/about/index';
import Book from '../views/book/index';
import Details from '../views/details/index';
import User from '../views/user/index';

const routerList = [
    {
        path: '/',
        name: '首页',
        exact: true,
        render: () => {
            return <Redirect to="/index/all" />
        }
    },
    {
        path: '/index/:id',
        exact: true,
        render: (props) => {
            return <Index {...props} />
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
        path: '/details/:id',
        exact: true,
        render: () => {
            return <Details />
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