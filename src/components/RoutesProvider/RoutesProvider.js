import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

import Home from '../../views/Home';
import Login from '../../views/Login';
import NotFound from '../../views/NotFound';

export default function RoutesProvider(props) {
    const {routesMap} = props;

    console.log(routesMap)

    return <BrowserRouter>
        <Switch>
            <AppRoute view={Home} path="/" exact isProtected /> 
            <AppRoute view={Login} path="/login" exact /> 
            <AppRoute view={NotFound} path="*" />
        </Switch>
    </BrowserRouter>    
}

/*
    {
        routesMap.map(({view, isProtected = false, path}) => {
            console.log(view, path)
            return <AppRoute key={path} view={view} path={path} exact isProtected={isProtected} />
        })
    }

    <AppRoute view={Home} path="/" exact isProtected /> 
    <AppRoute view={Login} path="/login" exact /> 
    <AppRoute view={NotFound} path="*" />
*/