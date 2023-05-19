// --------------- TYPES ---------------
import { CreateCharges, GetBeachType, GetBeaches, GetMyTags, GetExpiredTags } from '../Types';

// --------------- ACTIONS ---------------
export const getBeachs = {
    Request: (params) => ({ type: GetBeaches.REQUEST, params }),
    Success: (data) => ({ type: GetBeaches.SUCCESS, payload: data }),
    Failed: (error) => ({ type: GetBeaches.FAILED, payload: error }),
};

export const getBeachByType = {
    Request: (params) => ({ type: GetBeachType.REQUEST, params }),
    Success: (data) => ({ type: GetBeachType.SUCCESS, payload: data }),
    Failed: (error) => ({ type: GetBeachType.FAILED, payload: error }),
};

export const getMyTag = {
    Request: (params) => ({ type: GetMyTags.REQUEST, params }),
    Success: (data) => ({ type: GetMyTags.SUCCESS, payload: data }),
    Failed: (error) => ({ type: GetMyTags.FAILED, payload: error }),
};

export const createCharges = {
    Request: (params) => ({ type: CreateCharges.REQUEST, params }),
    Success: (data) => ({ type: CreateCharges.SUCCESS, payload: data }),
    Failed: (error) => ({ type: CreateCharges.FAILED, payload: error }),
};

export const getMyExpiredTag = {
    Request: (params) => ({ type: GetExpiredTags.REQUEST, params }),
    Success: (data) => ({ type: GetExpiredTags.SUCCESS, payload: data }),
    Failed: (error) => ({ type: GetExpiredTags.FAILED, payload: error }),
};
