import {themeActions} from '../constants'
import {createLogic} from 'redux-logic'

const toggleModeLogic = createLogic({
    type: themeActions.toggleMode, 
    process({getState, action}, dispatch, done) {
        // Login on toggle mode
        done();
    }
});

export default [toggleModeLogic]