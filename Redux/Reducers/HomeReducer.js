// --------------- TYPES ---------------
import { CreateCharges, GetBeachType, GetBeaches, GetExpiredTags, GetMyTags } from '../Types';
import { Constants } from '../../CommonConfig';
import { Tools } from '../../Helpers';

// --------------- INITIAL STATE ---------------
export const INITIAL_STATE = {
    beachs: [],
    error: null,
    errorMsg: '',
    successMsg: '',
    beachPasses: [],
    shuttlePasses: [],
    recreationalPasses: [],
};

// --------------- REDUCER FUNCTION ---------------
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GetBeaches.REQUEST:
            return { ...state, isGetBeachSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case GetBeaches.SUCCESS:
            return { ...state, isGetBeachSuccess: true, successMsg: action.payload.msg, beachs: action.payload.data };
        case GetBeaches.FAILED:
            return { ...state, isGetBeachSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case GetBeachType.REQUEST:
            return { ...state, isGetBeachTypeSuccess: null, error: null, errorMsg: '', successMsg: '', beachPasses: [], shuttlePasses: [], recreationalPasses: [] };
        case GetBeachType.SUCCESS:
            return { ...state, isGetBeachTypeSuccess: true, successMsg: action.payload.msg, beachPasses: action.payload?.beachPasses, shuttlePasses: action.payload?.shuttlePasses, recreationalPasses: action.payload?.recreationalPasses };
        case GetBeachType.FAILED:
            return { ...state, isGetBeachTypeSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case GetMyTags.REQUEST:
            return { ...state, isGetMyTagsSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case GetMyTags.SUCCESS:
            return { ...state, isGetMyTagsSuccess: true, successMsg: action.payload.msg, myPasses: action.payload.data };
        case GetMyTags.FAILED:
            return { ...state, isGetMyTagsSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case CreateCharges.REQUEST:
            return { ...state, iscreateChargesSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case CreateCharges.SUCCESS:
            return { ...state, iscreateChargesSuccess: true, successMsg: action.payload?.msg };
        case CreateCharges.FAILED:
            return { ...state, iscreateChargesSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        case GetExpiredTags.REQUEST:
            return { ...state, isGetExpiredTagsSuccess: null, error: null, errorMsg: '', successMsg: '', };
        case GetExpiredTags.SUCCESS:
            return { ...state, isGetExpiredTagsSuccess: true, successMsg: action.payload.msg, myExpiredPasses: action.payload.data };
        case GetExpiredTags.FAILED:
            return { ...state, isGetExpiredTagsSuccess: false, error: action.payload, errorMsg: Tools.trimString(action.payload.message) };

        default:
            return state;
    }
};
