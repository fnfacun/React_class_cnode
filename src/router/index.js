import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routerList from './router_list';

export default class IndexRouter extends Component {
    render(){
        return (<Switch>
            {routerList.map((item, index)=>{
                return (<Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    render={item.render}
                />)
            })}
        </Switch>)
    }
};