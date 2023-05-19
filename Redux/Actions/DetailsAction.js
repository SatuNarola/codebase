import { ActivateShuttle, GetDetails } from "../Types";

export const getDetails = {
    Request: (params) => ({ type: GetDetails.REQUEST, params }),
    Success: (data) => ({ type: GetDetails.SUCCESS, payload: data }),
    Failed: (error) => ({ type: GetDetails.FAILED, payload: error }),
}

export const activateShuttle = {
    Request: (params) => ({ type: ActivateShuttle.REQUEST, params }),
    Success: (data) => ({ type: ActivateShuttle.SUCCESS, payload: data }),
    Failed: (error) => ({ type: ActivateShuttle.FAILED, payload: error }),
}