export const API_BASE_URL = "https://api.talktier.com/"
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
 

export const PHONE_API = getApiUrl('user/v1/loginSignupOtp');
export const OTP_VERIFICATION_API = getApiUrl("user/v1/verifyOtp");
export const INFINITE_SCROLL = getApiUrl("user/v1/getUserSearch");
export const SEARCH_API = getApiUrl("user/v1/getUserNearMe")

