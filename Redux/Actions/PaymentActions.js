import { CreateCardToken, AddCard, UpdateDefaultCard, GetAllCards, DeleteCard } from "../Types";

export const createCardToken = {
    Request: (params) => ({ type: CreateCardToken.REQUEST, params }),
    Success: (data) => ({ type: CreateCardToken.SUCCESS, payload: data }),
    Failed: (error) => ({ type: CreateCardToken.FAILED, payload: error }),
};

export const addCard = {
    Request: (params) => ({ type: AddCard.REQUEST, params }),
    Success: (data) => ({ type: AddCard.SUCCESS, payload: data }),
    Failed: (error) => ({ type: AddCard.FAILED, payload: error }),
};

export const updateDefaultCard = {
    Request: (params) => ({ type: UpdateDefaultCard.REQUEST, params }),
    Success: (data) => ({ type: UpdateDefaultCard.SUCCESS, payload: data }),
    Failed: (error) => ({ type: UpdateDefaultCard.FAILED, payload: error }),
};

export const getAllCards = {
    Request: (params) => ({ type: GetAllCards.REQUEST }),
    Success: (data) => ({ type: GetAllCards.SUCCESS, payload: data }),
    Failed: (error) => ({ type: GetAllCards.FAILED, payload: error }),
};

export const deleteCard = {
    Request: (params) => ({ type: DeleteCard.REQUEST, params }),
    Success: (data) => ({ type: DeleteCard.SUCCESS, payload: data }),
    Failed: (error) => ({ type: DeleteCard.FAILED, payload: error }),
};
