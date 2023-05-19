// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { CreateCharges, GetBeachType, GetBeaches, GetExpiredTags, GetMyTags } from '../Types';
import { createCharges, getBeachByType, getBeachs, getMyExpiredTag, getMyTag } from '../Actions';
import API from '../Services';
import { Constants } from '../../CommonConfig';

const getBeachesSaga = function* getBeachesSaga({ params }) {
    try {
        const response = yield call(API.Home.GetAllBeach, params);
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(getBeachs.Success(response));
    } catch (error) {
        yield put(getBeachs.Failed(error));
    }
};

const getBeachTypeSaga = function* getBeachTypeSaga({ params }) {
    try {
        const response = yield call(API.Home.GetBeachType, params);
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }

        const msg = response.msg;
        const data = response.data;
        const beachPasses = data.filter((val) => val?.type == Constants.PASS_TYPE.BEACH_PASS);
        const shuttlePasses = data.filter((val) => val?.type == Constants.PASS_TYPE.SHUTTLE_PASS);
        const recreationalPasses = data.filter((val) => val?.type == Constants.PASS_TYPE.RECREATIONAL_PASS);
        const payload = {
            msg,
            beachPasses,
            shuttlePasses,
            recreationalPasses,
        }
        yield put(getBeachByType.Success(payload));
    } catch (error) {
        console.log("getBeachTypeSaga Error: ", error);
        yield put(getBeachByType.Failed(error));
    }
}

const getMyTagsSaga = function* getMyTagsSaga({ params }) {
    try {
        const response = yield call(API.Home.GetMyTags, params);
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(getMyTag.Success(response));
    } catch (error) {
        yield put(getMyTag.Failed(error));
    }
};

const createChargesSaga = function* createChargesSaga({ params }) {
    try {
        const response = yield call(API.Home.CreateCharges, params);
        // console.log("createChargesSaga response: ", response);
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(createCharges.Success(response));
    } catch (error) {
        // console.log("createChargesSaga error: ", error);
        yield put(createCharges.Failed(error));
    }
}

const getMyExiredPassesSaga = function* getMyExiredPassesSaga({ params }) {
    try {
        const response = yield call(API.Home.GetMyExiredPasses, params);
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(getMyExpiredTag.Success(response));
    } catch (error) {
        yield put(getMyExpiredTag.Failed(error));
    }
}

function* homeSaga() {
    yield all([
        takeEvery(GetBeaches.REQUEST, getBeachesSaga),
        takeEvery(GetBeachType.REQUEST, getBeachTypeSaga),
        takeEvery(GetMyTags.REQUEST, getMyTagsSaga),
        takeEvery(CreateCharges.REQUEST, createChargesSaga),
        takeEvery(GetExpiredTags.REQUEST, getMyExiredPassesSaga)
    ]);
}

export default homeSaga;