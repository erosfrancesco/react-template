import {createLogic} from 'redux-logic'
import {userActions} from '../constants'
import {saveUser, loginFailed} from '../actions'

const sendLogin = createLogic({
    type: userActions.loginRequest, 
    process({getState, action}, dispatch, done) {
        // Login
        const {username, password} = action.payload

        const loginUrl = 'https://localhost:3000/users/login'
        const method = 'POST'
        const body = {username, password}
        window.fetch(loginUrl, {method, body})
        .then(response => response.json().then(user => {
            // save user
            const {username, password, token} = user
            dispatch(saveUser({username, password, token}))
            done();
        }))
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