// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { ScanQR } from '../Types';
import { scanQR } from '../Actions';
import API from '../Services';
import { Constants } from '../../CommonConfig';

const ScanQRSaga = function* ScanQRSaga({ params }) {
    try {
        const response = yield call(API.Scan.ScanQRCode, params);
        // console.log("ScanQRSaga response: ", response)
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(scanQR.Success(response))
    } catch (error) {
        // console.log("ScanQRSaga error: ", error)
        yield put(scanQR.Failed(error))
    }
}


function* scanSaga() {
    yield all([
        takeEvery(ScanQR.REQUEST, ScanQRSaga),
    ]);
}

export default scanSaga;