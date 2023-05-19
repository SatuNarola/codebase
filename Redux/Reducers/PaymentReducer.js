// --------------- TYPES ---------------
import { CreateCardToken, AddCard, UpdateDefaultCard, GetAllCards, DeleteCard } from '../Types';
import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    error: null,
    errorMsg: '',
    successMsg: '',
    cardTokenData: null,
    cardData: null,
    updateData: null,
    addCardData: null
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CreateCardToken.REQUEST:
            return { ...state, isCreateTokenSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case CreateCardToken.SUCCESS:
            return { ...state, isCreateTokenSuccess: true, cardTokenData: action.payload };
        case CreateCardToken.FAILED:
            return { ...state, isCreateTokenSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case AddCard.REQUEST:
            return { ...state, isAddCardSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case AddCard.SUCCESS:
            return { ...state, isAddCardSuccess: true, successMsg: action.payload.msg, addCardData: action.payload.data };
        case AddCard.FAILED:
            return { ...state, isAddCardSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case UpdateDefaultCard.REQUEST:
            return { ...state, isUpdateDefaultCardSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case UpdateDefaultCard.SUCCESS:
            return { ...state, isUpdateDefaultCardSuccess: true, successMsg: action.payload.msg, updateData: action.payload.data };
        case UpdateDefaultCard.FAILED:
            return { ...state, isUpdateDefaultCardSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case GetAllCards.REQUEST:
            return { ...state, isGetAllCardsSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case GetAllCards.SUCCESS:
            return { ...state, isGetAllCardsSuccess: true, successMsg: action.payload.msg, cardData: action.payload.data };
        case GetAllCards.FAILED:
            return { ...state, isGetAllCardsSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case DeleteCard.REQUEST:
            return { ...state, isDeleteCardSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case DeleteCard.SUCCESS:
            return { ...state, isDeleteCardSuccess: true, successMsg: action.payload.msg, cardData: action.payload.data };
        case DeleteCard.FAILED:
            return { ...state, isDeleteCardSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        default:
            return state;
    }
};
