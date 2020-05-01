import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

import Home from '../../views/Home';
import Login from '../../views/Login';
import NotFound from '../../views/NotFound';

function RoutesProvider(props) {
    return <BrowserRouter>
        <Switch>
            <AppRoute view={Home} path="/" exact /> 
            <AppRoute view={Login} path="/login" exact /> 
            <AppRoute view={NotFound} path="*" />
        </Switch>
    </BrowserRouter>    
}

export default RoutesProvider