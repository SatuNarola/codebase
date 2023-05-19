import moment from 'moment';
import { Tools } from '../../Helpers';
import { ActivateShuttle, GetDetails } from '../Types';

export const INITIAL_STATE = {
    error: null,
    errorMsg: '',
    successMsg: '',
    data: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Register
        case GetDetails.REQUEST:
            return { ...state, isGetDetailsSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case GetDetails.SUCCESS:
            return { ...state, isGetDetailsSuccess: true, successMsg: action.payload.msg, data: action.payload.data };
        case GetDetails.FAILED:
            return { ...state, isGetDetailsSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case ActivateShuttle.REQUEST:
            return { ...state, isActivateShuttleSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case ActivateShuttle.SUCCESS:
            return { ...state, isActivateShuttleSuccess: true, successMsg: action.payload.msg, shuttle_pass_active_date: action.payload?.shuttle_pass_active_date ?? moment(Date.now()).utc().format('YYYY-MM-DD HH:mm:ss') }; //2016-05-03T20:15:01Z
        case ActivateShuttle.FAILED:
            return { ...state, isActivateShuttleSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        default:
            return state;
    }
};