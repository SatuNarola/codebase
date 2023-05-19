// --------------- TYPES ---------------
import { Register, Login, Logout, ChangePass, OtherDeviceLogin, ForgotPass, UpdateProfile } from '../Types';

// --------------- ACTIONS ---------------
export const register = {
    Request: (params) => ({ type: Register.REQUEST, params }),
    Success: (data) => ({ type: Register.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Register.FAILED, payload: error }),
};

export const login = {
    Request: (params) => ({ type: Login.REQUEST, params }),
    Success: (data) => ({ type: Login.SUCCESS, payload: data }),
    Failed: (error) => {
        console.log("Error(Login Failed): ", error)
        return { type: Login.FAILED, payload: error }
    },
};

export const logout = {
    Request: (params) => ({ type: Logout.REQUEST, params }),
    Success: (data) => ({ type: Logout.SUCCESS, payload: data }),
    Failed: (error) => ({ type: Logout.FAILED, payload: error }),
};

export const changePass = {
    Request: (params) => ({ type: ChangePass.REQUEST, params }),
    Success: (data) => ({ type: ChangePass.SUCCESS, payload: data }),
    Failed: (error) => ({ type: ChangePass.FAILED, payload: error }),
}

export const otherDeviceLogin = {
    Request: (params) => ({ type: OtherDeviceLogin.REQUEST, params }),
    Success: (data) => ({ type: OtherDeviceLogin.SUCCESS, payload: data }),
    Failed: (error) => ({ type: OtherDeviceLogin.FAILED, payload: error }),
}

export const forgotPassword = {
    Request: (params) => ({ type: ForgotPass.REQUEST, params }),
    Success: (data) => ({ type: ForgotPass.SUCCESS, payload: data }),
    Failed: (error) => ({ type: ForgotPass.FAILED, payload: error }),
}

export const updateProfie = {
    Request: (params) => ({ type: UpdateProfile.REQUEST, params }),
    Success: (data) => ({ type: UpdateProfile.SUCCESS, payload: data }),
    Failed: (error) => ({ type: UpdateProfile.FAILED, payload: error }),
}