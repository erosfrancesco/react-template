import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import UserContext from '../../UserContext';

function AppRoute(props) {
    const {view: RouteView, path, isProtected = false} = props
    
    if (!isProtected) {
        return <Route path={path} component={RouteView}> 
        </Route>
    }

    return <UserContext.Consumer>
        {user => {
            console.log(user)
            if(!user.user) {
                return null
            }

            if (user.user.token && user.user.token.token) {
                return <Route path={path} component={RouteView} />
            }

            return <Redirect to='login' />
        }}
       
    </UserContext.Consumer> 
    
}

export default AppRoute;