/**
 * Auth Types
 */
export const Register = {
    REQUEST: 'register_request',
    SUCCESS: 'register_success',
    FAILED: 'register_failed',
};
export const Login = {
    REQUEST: 'login_request',
    SUCCESS: 'login_success',
    FAILED: 'login_failed',
};
export const Logout = {
    REQUEST: 'logout_request',
    SUCCESS: 'logout_success',
    FAILED: 'logout_failed',
};
export const ChangePass = {
    REQUEST: 'change_pass_request',
    SUCCESS: 'change_pass_success',
    FAILED: 'change_pass_failed',
};
export const OtherDeviceLogin = {
    REQUEST: 'other_device_login_request',
    SUCCESS: 'other_device_login_success',
    FAILED: 'other_device_login_failed',
}
export const ForgotPass = {
    REQUEST: 'forgot_pass_request',
    SUCCESS: 'forgot_pass_success',
    FAILED: 'forgot_pass_failed',
}
export const UpdateProfile = {
    REQUEST: 'update_profile_request',
    SUCCESS: 'update_profile_success',
    FAILED: 'update_profile_failed',
}

/**
 * Home Types
 */
export const GetBeaches = {
    REQUEST: 'get_beaches_request',
    SUCCESS: 'get_beaches_success',
    FAILED: 'get_beaches_failed',
};
export const GetBeachType = {
    REQUEST: 'get_beach_type_request',
    SUCCESS: 'get_beach_type_success',
    FAILED: 'get_beach_type_failed',
};
/**
 * get my passes
 */
export const GetMyTags = {
    REQUEST: 'get_my_tags_request',
    SUCCESS: 'get_my_tags_success',
    FAILED: 'get_my_tags_failed',
};

/**
 * get expired tag
 */
export const GetExpiredTags = {
    REQUEST: 'get_my_expired_tags_request',
    SUCCESS: 'get_my_expired_tags_success',
    FAILED: 'get_my_expired_tags_failed',
};

export const CreateCharges = {
    REQUEST: 'create_charges_request',
    SUCCESS: 'create_charges_success',
    FAILED: 'create_charges_failed',
};

/**
 * Details Types
 */

export const GetDetails = {
    REQUEST: 'get_details_request',
    SUCCESS: 'get_details_success',
    FAILED: 'get_details_failed',
}
export const ActivateShuttle = {
    REQUEST: 'activate_shuttle_request',
    SUCCESS: 'activate_shuttle_success',
    FAILED: 'activate_shuttle_failed',
}

/**
 * QRCode Scan types
 */
export const ScanQR = {
    REQUEST: 'scan_qr_request',
    SUCCESS: 'scan_qr_success',
    FAILED: 'scan_qr_failed',
}

/**
 * Payment Types
 */
export const CreateCardToken = {
    REQUEST: 'create_card_token_request',
    SUCCESS: 'create_card_token_success',
    FAILED: 'create_card_token_failed',
}
export const AddCard = {
    REQUEST: 'add_card_request',
    SUCCESS: 'add_card_success',
    FAILED: 'add_card_failed',
}
export const DeleteCard = {
    REQUEST: 'delete_card_request',
    SUCCESS: 'delete_card_success',
    FAILED: 'delete_card_failed',
}
export const GetAllCards = {
    REQUEST: 'get_all_card_request',
    SUCCESS: 'get_all_card_success',
    FAILED: 'get_all_card_failed',
}
export const UpdateDefaultCard = {
    REQUEST: 'update_default_card_request',
    SUCCESS: 'update_default_card_success',
    FAILED: 'update_default_card_failed',
}

/**
 * Common Types
 */
export const GetNetwork = {
    REQUEST: 'get_network_request',
};