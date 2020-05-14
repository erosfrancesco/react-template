import {createLogic} from 'redux-logic'
import {protectedStub, userActions} from '../constants'

// check the JWT token in the payload of FETCH_* actions
// actions. The token could also just been stored in state.
// If expired or expiring soon, refresh before continuing
export default createLogic({
  type: [protectedStub.fetch], // action types or regexes
  validate({ getState, action }, allow, reject) {
    const state = getState()
    const jwt = state.user.user.token

    checkToken(jwt, getState())
    .then(jwt => {
      console.log('fetching foo')
      allow({
        ...action,
        jwt
      });
    })
    .catch(err => {
      reject({ type: userActions.invalidate })
    });
  }
})

function checkToken(jwt, state) {
  return Promise.resolve(true)  // promise true
  // return Promise.reject()       // promise false
  // const expires = calcExpires(JWT); // negative if already expired
  // if (expires < 0) { // expired
  //   return api.getJWTToken(state.x); // returns a promise to new JWT
  // } else if (expires < THRESHOLD) { // expires soon
  //   return api.refreshJWTToken(jwt); // return a promise to refreshed JWT
  // }
  // // otherwise not expiring soon nothing to do, still valid
  // return Promise.resolve(jwt); // promise to existing JWT    
}