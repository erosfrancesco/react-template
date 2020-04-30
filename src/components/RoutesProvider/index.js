import {connect} from 'react-redux'

import Component from './RoutesProvider'

function mapStateToProps(state, props) {
    return {
        // routes: state.routes
    }
}


const RoutesProvider = connect(mapStateToProps)(Component)
export default RoutesProvider
  