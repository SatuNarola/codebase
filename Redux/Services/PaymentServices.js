// import { API_URL, APP_SECRET, STRIPE_URL, STRIPE_AUTH_TOKEN } from '@env'
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
    CreateCardToken: (params) => {
        if (global.isConnected) {
            return fetch(STRIPE_URL, {
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Bearer ${STRIPE_AUTH_TOKEN}`
                },
                body: params
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });

        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },
    AddCardToCustomer: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'addCardToCustomer', {
                method: 'POST',
                headers: {
                    ...headers,
                    "Auth-Token": global.auth_token,
                    "Access-Token": global.access_token
                },
                body: JSON.stringify(params)
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });

        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },
    UpdateDefaultCard: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'updateDefaultCard', {
                method: 'POST',
                headers: {
                    ...headers,
                    "Auth-Token": global.auth_token,
                    "Access-Token": global.access_token
                },
                body: JSON.stringify(params)
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });

        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },
    GetAllCards: () => {
        if (global.isConnected) {
            return fetch(API_URL + 'getCustomerByID', {
                method: 'GET',
                headers: {
                    ...headers,
                    "Auth-Token": global.auth_token,
                    "Access-Token": global.access_token
                },
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });

        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },
    DeleteCard: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'deletePaymentCard', {
                method: 'POST',
                headers: {
                    ...headers,
                    "Auth-Token": global.auth_token,
                    "Access-Token": global.access_token
                },
                body: JSON.stringify(params)
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => {
                    return data;
                });

        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },
}