import { all } from 'redux-saga/effects';

import AuthSaga from './AuthSaga';
import homeSaga from './HomeSaga';
import detailsSaga from './DetailsSaga';
import scanSaga from './ScanSaga';
import paymentSaga from './PaymentSaga';

//Main Root Saga
const rootSaga = function* rootSaga() {
    yield all([AuthSaga(), homeSaga(), detailsSaga(), scanSaga(), paymentSaga()]);
};
export default rootSaga;
