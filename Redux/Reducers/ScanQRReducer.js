import { ScanQR } from '../Types';
import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';

export const INITIAL_STATE = {
    error: null,
    errorMsg: '',
    successMsg: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ScanQR.REQUEST:
            return { ...state, isScanSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case ScanQR.SUCCESS:
            return { ...state, isScanSuccess: true, successMsg: action.payload.msg, };
        case ScanQR.FAILED:
            return { ...state, isScanSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        default:
            return state;
    }
};