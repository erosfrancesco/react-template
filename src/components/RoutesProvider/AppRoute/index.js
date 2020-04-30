


/*
    <PublicRoute restricted={false} component={Home} path="/" exact />
    <PublicRoute restricted={true} component={SignIn} path="/signin" exact />
    <PrivateRoute component={Dashboard} path="/dashboard" exact />
*/


import Component from './AppRoute'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
    return {
    };
}

const AppRoute = connect(mapStateToProps)(Component);
export default AppRoute;
