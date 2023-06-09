import { EventRegister } from 'react-native-event-listeners';
import { Constants } from '../../CommonConfig';

const POST = 'post';
const GET = 'get';
const PUT = 'put';
const PATCH = 'patch';
const DELETE = 'delete';

const handleResponse = async (response) => {
    // if (!response.ok) {
    //     return Promise.reject(response);
    // }
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
        const temp = response.json();
        const responseData = await temp;
        if (responseData?.force_logout && responseData?.force_logout == 1) {
            console.log("Logout ---> ", responseData)
            EventRegister.emit('logout');
        }
        return temp;
    } else {
        return response.text();
    }
};

const Request = async (route, method, payload, formData, priv = true) => {
    let config = priv
        ? {
            method: method,
            headers: {
                Accept: 'application/json',
                'x-access-token': global.accesskey,
                guid: global.guid,
                device_type: Constants.DEVICE_TYPE,
            },
        }
        : {
            method: method,
            headers: {
                Accept: 'application/json',
                accesskey: 'nousername',
                secretkey: global.secretkey,
                device_type: Constants.DEVICE_TYPE,
            },
        };
    if (payload) {
        config = {
            ...config,
            headers: {
                ...config.headers,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        };
    }
    if (formData) {
        config = {
            ...config,
            body: formData,
        };
    }
    return fetch(route, config).then((res) => handleResponse(res));
};

export default {
    Request,
    handleResponse,
    POST,
    PUT,
    PATCH,
    GET,
    DELETE,
};
