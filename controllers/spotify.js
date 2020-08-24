const querystring = require('querystring');
const request = require('request')
const client_url = 'http://localhost:3000/#'


<<<<<<< HEAD
const client_id = '3dfb23664b73446abdb76ccb50b15c0e' // Your client id
const client_secret = 'e29b4852ce444bb29a99f925eac5f98f' // Your secret
const redirect_uri = 'http://localhost:3001/api/v1/auth/callback/' // Your redirect uri
=======
const client_id = '3dfb23664b73446abdb76ccb50b15c0e' // Larry client id
const client_secret = 'e29b4852ce444bb29a99f925eac5f98f' // Larry secret
const redirect_uri = 'http://localhost:3001/api/v1/auth/callback/' // Larry redirect uri
>>>>>>> ccfb696f1094d733764dde097e5e8477b3410e85

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
const generateRandomString = function (length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const stateKey = 'spotify_auth_state';

const home = (req, res) => {
    res.send('Auth')
}

const login = (req, res) => {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    const scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        })
    )
}
const callback = (req, res) => {
    // your application requests refresh and access tokens
    // after checking the state parameter

    const code = req.query.code || null;
    const state = req.query.state || null;
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect(client_url +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                const access_token = body.access_token,
                    refresh_token = body.refresh_token;

                const options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: {
                        'Authorization': 'Bearer ' + access_token
                    },
                    json: true
                }

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    console.log('userData:', body); // TODO: remove
                    console.log('userID:', body.id) // TODO: remove
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect(client_url +
                    querystring.stringify({
                        access_token: access_token,
                        refresh_token: refresh_token
                    }));
            } else {
                res.redirect(client_url +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
}
const refresh = (req, res) => {
    // requesting access token from refresh token
    const refresh_token = req.query.refresh_token;
    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
}

module.exports = {
    home, login, callback, refresh
}