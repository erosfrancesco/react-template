import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

import Home from '../../views/Home';
import NotFound from '../../views/NotFound';

function RoutesProvider(props) {
    return <BrowserRouter>
        <Switch>
            <AppRoute view={Home} path="/" exact /> 
            <AppRoute view={NotFound} path="*" />
        </Switch>
    </BrowserRouter>    
}

export default RoutesProvider