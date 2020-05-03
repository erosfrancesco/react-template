import {userActions} from '../constants'
import {createLogic} from 'redux-logic'

const userLogic = createLogic({
    type: userActions.save, 
    process({getState, action}, dispatch, done) {
        // Login on toggle mode
        done();
    }
});

export default [userLogic]