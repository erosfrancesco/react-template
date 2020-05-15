export default {
  getUser,
  getUsers,
  validateUserToken
}

// Mock DB
export const users = [{ 
  id: 1, 
  username: 'ciccio', password: 'franco', 
  firstName: 'FooBar', lastName: 'User' 
}]
export const DEFAULT_USER_INDEX = 0


// Mock Procedures

// USERS
function getUsers() {
  return users
}

function getUser() {
  const token = generateToken()
  users[DEFAULT_USER_INDEX].token = token
  
  return users[DEFAULT_USER_INDEX]
}


// TOKENS
function generateToken() {
  const expirationDelta = 10
  const token = 'wubbahlubbaduh'
  const now = new Date()
  const expiresAt = now
  expiresAt.setMinutes(now.getMinutes() + expirationDelta)

  return {
    token,
    expiresAt: expiresAt.getTime()
  }
}

function validateUserToken() {
  const user = users[DEFAULT_USER_INDEX]
  const tokenItem = user && user.token
  if (!tokenItem) {
    console.log("No token")
    return false
  }

  const {token, expiresAt} = tokenItem

  if (expiresAt < new Date().getTime()) {
    console.log("toKEN EXPIREEd")
    return false
  }

  return token
}