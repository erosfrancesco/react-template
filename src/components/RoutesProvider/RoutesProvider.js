import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

import Home from '../../views/Home';
import Login from '../../views/Login';
import NotFound from '../../views/NotFound';

export default function RoutesProvider(props) {
    // const {routesMap} = props;

    // const Routes = routesMap.map(route => <AppRoute key={route.path} view={route.view} path={route.path} exact isProtected={route.isProtected} />
    // )
    const Routes = 
    <Switch>
        <AppRoute view={Home} path="/" exact isProtected /> 
        <AppRoute view={Login} path="/login" exact /> 
        <AppRoute view={NotFound} path="*" />
    </Switch>

    return <BrowserRouter>
            { Routes }
    </BrowserRouter>    
}

/*
    <AppRoute view={Home} path="/" exact isProtected /> 
    <AppRoute view={Login} path="/login" exact /> 
    <AppRoute view={NotFound} path="*" />
*/