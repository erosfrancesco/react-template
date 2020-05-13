import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// Mock DB
const users = [{ 
  id: 1, 
  username: 'ciccio', password: 'franco', 
  firstName: 'FooBar', lastName: 'User' 
}];
const user = users[0]
user.token = 'wabbah'
//

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
  users
})
// Mock any POST request to /users/login
.onPost('/users/login').reply(200, {
  user
});
  
export default mock