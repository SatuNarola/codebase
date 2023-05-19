// --------------- LIBRARIES ---------------
import { put, call, takeEvery, all } from 'redux-saga/effects';

// --------------- ASSETS ---------------
import { AddCard, CreateCardToken, DeleteCard, GetAllCards, UpdateDefaultCard } from '../Types';
import { addCard, createCardToken, deleteCard, getAllCards, updateDefaultCard } from '../Actions';
import API from '../Services';
import { Constants } from '../../CommonConfig';

const createCardTokenSaga = function* createCardTokenSaga({ params }) {
    try {
        const response = yield call(API.Payment.CreateCardToken, params);
        // console.log("ScanQRSaga response: ", response)
        if (response?.error) {
            throw new Error(response?.error?.message);
        }
        yield put(createCardToken.Success(response))
    } catch (error) {
        // console.log("ScanQRSaga error: ", error)
        yield put(createCardToken.Failed(error))
    }
}

const addCardSaga = function* addCardSaga({ params }) {
    try {
        const response = yield call(API.Payment.AddCardToCustomer, params);
        // console.log("ScanQRSaga response: ", response)
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(addCard.Success(response))
    } catch (error) {
        // console.log("ScanQRSaga error: ", error)
        yield put(addCard.Failed(error))
    }
}

const updateDefaultCardSaga = function* updateDefaultCardSaga({ params }) {
    try {
        const response = yield call(API.Payment.UpdateDefaultCard, params);
        // console.log("ScanQRSaga response: ", response)
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(updateDefaultCard.Success(response))
    } catch (error) {
        // console.log("ScanQRSaga error: ", error)
        yield put(updateDefaultCard.Failed(error))
    }
}

const getAllCardsSaga = function* getAllCardsSaga({ }) {
    try {
        const response = yield call(API.Payment.GetAllCards);
        // console.log("ScanQRSaga response: ", response)
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(getAllCards.Success(response))
    } catch (error) {
        // console.log("ScanQRSaga error: ", error)
        yield put(getAllCards.Failed(error))
    }
}

const deleteCardSaga = function* deleteCardSaga({ params }) {
    try {
        const response = yield call(API.Payment.DeleteCard, params);
        console.log("deleteCardSaga response: ", response)
        if (response?.status != 1) {
            throw new Error(response?.msg);
        }
        yield put(deleteCard.Success(response))
    } catch (error) {
        // console.log("ScanQRSaga error: ", error)
        yield put(deleteCard.Failed(error))
    }
}

function* paymentSaga() {
    yield all([
        takeEvery(CreateCardToken.REQUEST, createCardTokenSaga),
        takeEvery(AddCard.REQUEST, addCardSaga),
        takeEvery(UpdateDefaultCard.REQUEST, updateDefaultCardSaga),
        takeEvery(GetAllCards.REQUEST, getAllCardsSaga),
        takeEvery(DeleteCard.REQUEST, deleteCardSaga),
    ]);
}

export default paymentSaga;