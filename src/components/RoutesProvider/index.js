import {connect} from 'react-redux'

import Component from './RoutesProvider'

function mapStateToProps(state, props) {
    return {
        routesMap: state.routesMap
    }
}

export default connect(mapStateToProps)(Component)
  