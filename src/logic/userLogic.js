import {createLogic} from 'redux-logic'
import axios from 'axios'
import {userActions} from '../constants'
import {saveUser, loginFailed} from '../actions'

const sendLogin = createLogic({
    type: userActions.loginRequest, 
    process({getState, action}, dispatch, done) {
        // Login
        const {username, password} = action.payload

        const loginUrl = '/users/login'
        const body = {username, password}
        axios.post(loginUrl, body)
        .then(response => {
            const {user} = response.data
            
            // save user
            const {username, password, token} = user
            dispatch(saveUser({username, password, token}))
            done();
        })
        .catch(err => {
            // compute error cases
            dispatch(loginFailed(err))
            done()
        })
    }
});

export default [
    sendLogin
]