import {createLogic} from 'redux-logic'
import {userActions, protectedStub} from '../constants'

// check the JWT token in the payload of FETCH_* actions
// actions. The token could also just been stored in state.
// If expired or expiring soon, refresh before continuing
export default createLogic({
  type: [protectedStub.fetch], // regex
  validate({ getState, action }, allow, reject) {
    const state = getState()
    const jwt = state.user.user.token

    checkToken(jwt)
    .then(token => allow({
      ...action,
      token
    }))
    .catch(err => {
      console.error(err)
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
  return Promise.resolve(jwt.token) 
}

function getTokenExpirationDelta(jwt) {
  const {expiresAt} = jwt
  const delta = expiresAt - new Date().getTime()
  
  return delta
}