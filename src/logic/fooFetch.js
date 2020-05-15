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

    checkToken(jwt)
    .then(jwt => {
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

function checkToken(jwt) {
  const THRESHOLD = 30 * 1000


  const expires = getTokenExpirationDelta(jwt); // negative if already expired
  // expired
  if (expires < 0) {
    return Promise.reject('Auth token expired')
  }

  // soon to be expired
  if (expires < THRESHOLD) {
    console.log('sending a reauth...')
    // return 
  }

  // not expired
  return Promise.resolve(true)

  //   return api.getJWTToken(state.x); // returns a promise to new JWT
  // } else if (expires < THRESHOLD) { // expires soon
  //   return api.refreshJWTToken(jwt); // return a promise to refreshed JWT
  // }
  // // otherwise not expiring soon nothing to do, still valid
  // return Promise.resolve(jwt); // promise to existing JWT    
}

function getTokenExpirationDelta(jwt) {
  const {expiresAt} = jwt
  const delta = expiresAt - new Date().getTime()
  console.log(jwt, delta)
  
  return delta
}