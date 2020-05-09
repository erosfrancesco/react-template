import {createLogic} from 'redux-logic'
import {userActions} from '../constants'
import {saveUser} from '../actions'
// const userLogic = createLogic({
//     type: userActions.save, 
//     process({getState, action}, dispatch, done) {
//         // Login
//         done();
//     }
// });

const sendLogin = createLogic({
    type: userActions.loginRequest, 
    process({getState, action}, dispatch, done) {
        // Login
        const {username, password} = action.payload

        const loginUrl = 'https://localhost:3000/users/login'
        const method = 'POST'
        const body = {username, password}
        window.fetch(loginUrl, {method, body})
        .then(response => {
            response.json().then(user => {
                console.log(user)
                // dispatch save user
                dispatch(saveUser(user))
                done();
            })
        })
        .catch(err => {
            console.error(err)
            done()
        })
    }
});

export default [
//    userLogic, 
    sendLogin
]