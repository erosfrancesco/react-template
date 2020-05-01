import Component from './component'
import {connect} from 'react-redux'

function mapStateToProps(state, props) {
  return {
    value: props.value
  };
}

function mapMethodsToProps(dispatch, props) {
  return {
    setValue: props.setValue
  };
}

export default connect(mapStateToProps, mapMethodsToProps)(Component)
