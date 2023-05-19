// --------------- TYPES ---------------
import {
    Register,
    Login,
    Logout,
    ChangePass,
    OtherDeviceLogin,
    ForgotPass,
    UpdateProfile
} from '../Types';
import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    isAuthenticated: false,
    error: null,
    errorMsg: '',
    successMsg: '',
    data: {},
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Register
        case Register.REQUEST:
            return { ...state, isRegisterSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Register.SUCCESS:
            return { ...state, isRegisterSuccess: true, successMsg: action.payload.msg, data: action.payload.data, isAuthenticated: true };
        case Register.FAILED:
            return { ...state, isRegisterSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message), isAuthenticated: false };

        // Login
        case Login.REQUEST:
            return { ...state, isLoginSuccess: null, error: null, errorMsg: '', successMsg: '', loginStatus: null };
        case Login.SUCCESS:
            return { ...state, isLoginSuccess: true, successMsg: action.payload.message, data: action.payload.data, isAuthenticated: true };
        case Login.FAILED:
            return { ...state, isLoginSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.msg ?? action.payload.message), isAuthenticated: false, loginStatus: action.payload?.status };

        // Logout
        case Logout.REQUEST:
            return { ...state, isLogoutSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case Logout.SUCCESS:
            return { ...state, isLogoutSuccess: true, successMsg: action.payload?.message ?? '', isAuthenticated: false };
        case Logout.FAILED:
            return { ...state, isLogoutSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload?.message ?? ''), };

        case ChangePass.REQUEST:
            return { ...state, isChangePassSuccess: null, error: null, errorMsg: "", successMsg: "" };
        case ChangePass.SUCCESS:
            return { ...state, isChangePassSuccess: true, successMsg: action.payload.message, data: { ...state.data, access_token: action.payload?.new_access_token, auth_token: action.payload?.new_token } }
        case ChangePass.FAILED:
            return { ...state, isChangePassSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) }

        case OtherDeviceLogin.REQUEST:
            return { ...state, isLoginSuccess: null, error: null, errorMsg: '', successMsg: '', loginStatus: null };
        case OtherDeviceLogin.SUCCESS:
            return { ...state, isLoginSuccess: true, successMsg: action.payload.msg, data: action.payload.data, isAuthenticated: true };
        case OtherDeviceLogin.FAILED:
            return { ...state, isLoginSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message ?? action.payload.msg), isAuthenticated: false, loginStatus: action.payload?.status };

        case ForgotPass.REQUEST:
            return { ...state, isForgotSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case ForgotPass.SUCCESS:
            return { ...state, isForgotSuccess: true, successMsg: action.payload.msg, };
        case ForgotPass.FAILED:
            return { ...state, isForgotSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message ?? action.payload.msg) };

        case UpdateProfile.REQUEST:
            return { ...state, isProfileUpdate: null, error: null, errorMsg: "", successMsg: "" };
        case UpdateProfile.SUCCESS:
            return { ...state, isProfileUpdate: true, successMsg: action.payload.msg, data: { ...state.data, first_name: action.payload?.first_name ?? '' } }
        case UpdateProfile.FAILED:
            return { ...state, isProfileUpdate: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) }

        default:
            return state;
    }
};
