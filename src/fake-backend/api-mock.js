export default {
  getUser,
  getUsers
}

// Mock DB
const users = [{ 
  id: 1, 
  username: 'ciccio', password: 'franco', 
  firstName: 'FooBar', lastName: 'User' 
}];


// Mock Procedures
function getUsers() {
  return users
}

function getUser() {
  const user = users[0]
  user.token = getToken()
  return user
}

function getToken() {
  const expirationDelta = 1
  const token = 'wubbahlubbaduh'
  const now = new Date()
  const expiresAt = now
  expiresAt.setMinutes(now.getMinutes() + expirationDelta)

  return {
    token,
    expiresAt: expiresAt.getTime()
  }
}