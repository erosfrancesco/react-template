import Component from './AppRoute'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
    return {
    };
}

const AppRoute = connect(mapStateToProps)(Component);
export default AppRoute;
