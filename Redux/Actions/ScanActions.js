import { ScanQR } from "../Types";

export const scanQR = {
    Request: (params) => ({ type: ScanQR.REQUEST, params }),
    Success: (data) => ({ type: ScanQR.SUCCESS, payload: data }),
    Failed: (error) => ({ type: ScanQR.FAILED, payload: error }),
};