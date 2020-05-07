import Component from './component'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
  return {
    label: props.label || 'Go Home'
  };
}

export default connect(mapStateToProps)(Component);