

// check the JWT token in the payload of FETCH_REPOS or FETCH_WIDGETS
// actions. The token could also just been stored in state.
// If expired or expiring soon, refresh before continuing
// const checkJWTLogic = createLogic({
//   type: [FETCH_REPOS, FETCH_WIDGETS], // action types or regexes
//   validate({ getState, action }, allow, reject) {
//     checkToken(action.jwt, getState())
//       .then(jwt => {
//         allow({
//           ...action,
//           jwt  // using the new or updated jwt token
//         });
//       })
//       .catch(err => {
//         console.error(err);        
//         reject({ type: AUTH_ERR, payload: err, error: true })
//       });
//   }
// });

function checkToken(jwt, state) {
  // const expires = calcExpires(JWT); // negative if already expired
  // if (expires < 0) { // expired
  //   return api.getJWTToken(state.x); // returns a promise to new JWT
  // } else if (expires < THRESHOLD) { // expires soon
  //   return api.refreshJWTToken(jwt); // return a promise to refreshed JWT
  // }
  // // otherwise not expiring soon nothing to do, still valid
  // return Promise.resolve(jwt); // promise to existing JWT    
}