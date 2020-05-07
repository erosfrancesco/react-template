import {userActions} from '../constants'
import {createLogic} from 'redux-logic'

const userLogic = createLogic({
    type: userActions.save, 
    process({getState, action}, dispatch, done) {
        // Login
        done();
    }
});

export default [userLogic]