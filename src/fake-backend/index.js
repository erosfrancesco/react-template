import {authenticate, getUsers} from './fake-compass'

export default function configureFakeBackend() {
    const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    authenticate(opts, users, resolve, reject)
                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    getUsers(opts, users, resolve, reject)
                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}