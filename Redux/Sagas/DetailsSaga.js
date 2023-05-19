import { activateShuttle, getDetails } from "../Actions";
import { ActivateShuttle, GetDetails } from "../Types";
import API from '../Services';
import { all, call, put, takeEvery } from "redux-saga/effects";
import { Constants } from "../../CommonConfig";

const GetDetailsSaga = function* GetDetailsSaga({ params }) {
    try {
        const response = yield call(API.Details.GetPassDetail, params);
        // console.log("GetDetailsSaga response: ", response);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? Constants.SOMETHING_WRONG);
        }
        yield put(getDetails.Success(response));
    } catch (error) {
        console.log("GetDetailsSaga Error: ", error);
        yield put(getDetails.Failed(error));
    }
}

const ActivateShuttleSaga = function* ActivateShuttleSaga({ params }) {
    try {
        const response = yield call(API.Details.ActivateShuttle, params);
        // console.log("ActivateShuttleSaga response: ", response);
        if (response?.status != 1) {
            throw new Error(response?.msg ?? '')
        }
        yield put(activateShuttle.Success(response));
    } catch (error) {
        console.log("ActivateShuttleSaga Error: ", error);
        yield put(activateShuttle.Failed(error));
    }
}

function* detailsSaga() {
    yield all([
        takeEvery(GetDetails.REQUEST, GetDetailsSaga),
        takeEvery(ActivateShuttle.REQUEST, ActivateShuttleSaga)
    ]);
}

export default detailsSaga;