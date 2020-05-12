export function authenticate(opts, users, resolve, reject) {
    // get parameters from post request
    let params = JSON.parse(opts.body);

    // find if any user matches login credentials
    let filteredUsers = users.filter(user => {
        return user.username === params.username && user.password === params.password;
    });

    if (filteredUsers.length) {
        // if login details are valid return user details and fake jwt token
        let user = filteredUsers[0];
        let responseJson = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token'
        };
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
    } else {
        // else return error
        reject('Username or password is incorrect');
    }
}


export function getUsers(opts, users, resolve, reject) {
    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
    } else {
        // return 401 not authorised if token is null or invalid
        reject('Unauthorised');
    }
}

export function loginSuccess(opts, users, resolve, reject) {
    resolve({ ok: true, json: () => {
        const user = users[0]
        user.token = 'djvbeqwioubvfpinkovlfc'
        // console.log("sending", user)
        return user
        // Promise.resolve(user)
    }});
}

export function loginError(opts, users, resolve, reject) {
    reject('User not found');
}