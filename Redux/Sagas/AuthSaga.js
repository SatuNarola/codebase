// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { Register, Login, Logout, ChangePass, OtherDeviceLogin, ForgotPass, UpdateProfile } from '../Types';
import { register, login, logout, changePass, otherDeviceLogin, forgotPassword, updateProfie } from '../Actions';
import API from '../Services/AuthServices';

const registerSaga = function* registerSaga({ params }) {
    try {
        const response = yield call(API.Register, params);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? '');
        }
        global.access_token = response?.data?.access_token;
        global.auth_token = response?.data?.auth_token;
        yield put(register.Success(response));

    } catch (error) {
        yield put(register.Failed(error));
    }
};

const loginSaga = function* loginSaga({ params }) {
    try {
        const response = yield call(API.Login, params);
        if (response?.status != 1) {
            if (response?.status == 99) {
                yield put(login.Failed(response));
                return;
            }
            throw new Error(response?.msg ?? '');
        }
        global.access_token = response?.data?.access_token;
        global.auth_token = response?.data?.auth_token;
        yield put(login.Success(response));
    } catch (error) {
        yield put(login.Failed(error));
    }
};

const logoutSaga = function* logoutSaga({ params }) {
    try {
        const response = yield call(API.Logout, params);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? '');
        }
        yield put(logout.Success(response));
    } catch (error) {
        yield put(logout.Failed(error));
    }
};

const changePassSaga = function* changePassSaga({ params }) {
    try {
        const response = yield call(API.ChangePass, params);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? '');
        }
        global.access_token = response?.new_access_token;
        global.auth_token = response?.new_token;
        yield put(changePass.Success(response));
    } catch (error) {
        yield put(changePass.Failed(error));
    }
}

const otherDeviceLoginSaga = function* otherDeviceLoginSaga({ params }) {
    try {
        const response = yield call(API.OtherDeviceLogin, params);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? '');
        }

        global.access_token = response?.data?.access_token;
        global.auth_token = response?.data?.auth_token;

        yield put(otherDeviceLogin.Success(response));
    } catch (error) {
        yield put(otherDeviceLogin.Failed(error));
    }
}

const ForgotPassSaga = function* ForgotPassSaga({ params }) {
    try {
        const response = yield call(API.ForgotPass, params);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? '');
        }

        yield put(forgotPassword.Success(response));
    } catch (error) {
        yield put(forgotPassword.Failed(error));
    }
}

const UpdateProfileSaga = function* UpdateProfileSaga({ params }) {
    try {
        const response = yield call(API.UpdateProfile, params);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? '');
        }

        yield put(updateProfie.Success(response));
    } catch (error) {
        yield put(updateProfie.Failed(error));
    }
}


function* authSaga() {
    yield all([
        takeEvery(Register.REQUEST, registerSaga),
        takeEvery(Login.REQUEST, loginSaga),
        takeEvery(Logout.REQUEST, logoutSaga),
        takeEvery(ChangePass.REQUEST, changePassSaga),
        takeEvery(OtherDeviceLogin.REQUEST, otherDeviceLoginSaga),
        takeEvery(ForgotPass.REQUEST, ForgotPassSaga),
        takeEvery(UpdateProfile.REQUEST, UpdateProfileSaga),
    ]);
}

export default authSaga;
