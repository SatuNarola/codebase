// import { API_URL, APP_SECRET } from '@env'
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
    GetPassDetail: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'getTagByBookingID', {
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
                    // console.log("Data: ", data)
                    return data;
                });
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    },
    ActivateShuttle: (params) => {
        if (global.isConnected) {
            return fetch(API_URL + 'activeShuttlePass', {
                method: 'POST',
                headers: {
                    ...headers,
                    "Auth-Token": global.auth_token,
                    "Access-Token": global.access_token
                },
                body: JSON.stringify(params)
            })
                .then((response) => Ajax.handleResponse(response))
                .then((data) => data);
        } else {
            return Promise.reject({ message: Constants.NETWORK_ERROR });
        }
    }
}