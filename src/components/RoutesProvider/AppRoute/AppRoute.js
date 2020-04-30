import React from 'react';
import { Route } from 'react-router-dom';


function AppRoute(props) {
    const {view: RouteView, path} = props
    
    if (!RouteView) {
        return null
    }

    // Management of view and path missings?
    return <Route path={path} component={RouteView}> 
        <RouteView />
    </Route>
}

export default AppRoute;