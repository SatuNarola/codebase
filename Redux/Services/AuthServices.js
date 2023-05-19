import { Constants } from '../../CommonConfig';
import Ajax from './base';

const API_URL = ''
const APP_SECRET = ''

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'App-Track-Version': 'v1',
    'App-Device-Type': Constants.USER_AGENT,
    'App-Store-Version': 1.0,
    'App-Device-Model': Constants.DEVICE.MODEL,
    'App-Os-Version': Constants.DEVICE.OS_VERSION,
    'App-Secret': APP_SECRET
}

export default {
    RefreshToken: () => {
        if (global.isConnected) {
            return fetch(API_URL + 'refreshToken', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': Constants.USER_AGENT,
                    accesskey: 'nousername',
                },
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    if (data.status != 200) {
                        return Promise.reject(data);
                    }
                    return data;
                });
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },

    Register: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'registerUser', {
                method: 'POST',
                headers: {
                    ...headers
                },
                body: JSON.stringify(params),
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },

    Login: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'login', {
                method: 'POST',
                headers: {
                    ...headers
                },
                body: JSON.stringify(params),
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },

    Logout: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + `logout`, {
                method: 'GET',
                headers: {
                    ...headers,
                    ...params,
                },
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },

    ChangePass: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'changePassword', {
                method: 'POST',
                headers: {
                    ...headers,
                    'Auth-Token': global.auth_token,
                    'Access-Token': global.access_token,
                },
                body: JSON.stringify(params),
            }).then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },

    OtherDeviceLogin: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'loginToNewDevice', {
                method: 'POST',
                headers: {
                    ...headers,
                },
                body: JSON.stringify(params),
            }).then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },

    ForgotPass: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'forgotPassword', {
                method: 'POST',
                headers: {
                    ...headers,

                },
                body: JSON.stringify(params),
            }).then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },


    UpdateProfile: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'updateProfile', {
                method: 'POST',
                headers: {
                    ...headers,
                    'Auth-Token': global.auth_token,
                    'Access-Token': global.access_token,
                },
                body: JSON.stringify(params),
            }).then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },
};
