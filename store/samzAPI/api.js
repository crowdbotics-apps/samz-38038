import axios from "axios"
const samzAPI = axios.create({
  baseURL: "/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_buyer_list(payload) {
  return samzAPI.get(`/api/v1/buyer/`)
}
function api_v1_buyer_create(payload) {
  return samzAPI.post(`/api/v1/buyer/`, payload.data)
}
function api_v1_event_list(payload) {
  return samzAPI.get(`/api/v1/event/`)
}
function api_v1_event_create(payload) {
  return samzAPI.post(`/api/v1/event/`, payload.data)
}
function api_v1_login_create(payload) {
  return samzAPI.post(`/api/v1/login/`)
}
function api_v1_artist_list(payload) {
  return samzAPI.get(`/api/v1/artist/`)
}
function api_v1_artist_create(payload) {
  return samzAPI.post(`/api/v1/artist/`, payload.data)
}
function api_v1_signup_create(payload) {
  return samzAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_read(payload) {
  return samzAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return samzAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return samzAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_login_create(payload) {
  return samzAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return samzAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return samzAPI.post(`/rest-auth/logout/`)
}
function api_v1_buyer_read(payload) {
  return samzAPI.get(`/api/v1/buyer/${payload.id}/`)
}
function api_v1_buyer_update(payload) {
  return samzAPI.put(`/api/v1/buyer/${payload.id}/`, payload.data)
}
function api_v1_buyer_partial_update(payload) {
  return samzAPI.patch(`/api/v1/buyer/${payload.id}/`, payload.data)
}
function api_v1_buyer_delete(payload) {
  return samzAPI.delete(`/api/v1/buyer/${payload.id}/`)
}
function api_v1_event_read(payload) {
  return samzAPI.get(`/api/v1/event/${payload.id}/`)
}
function api_v1_event_update(payload) {
  return samzAPI.put(`/api/v1/event/${payload.id}/`, payload.data)
}
function api_v1_event_partial_update(payload) {
  return samzAPI.patch(`/api/v1/event/${payload.id}/`, payload.data)
}
function api_v1_event_delete(payload) {
  return samzAPI.delete(`/api/v1/event/${payload.id}/`)
}
function api_v1_artist_read(payload) {
  return samzAPI.get(`/api/v1/artist/${payload.id}/`)
}
function api_v1_artist_update(payload) {
  return samzAPI.put(`/api/v1/artist/${payload.id}/`, payload.data)
}
function api_v1_artist_partial_update(payload) {
  return samzAPI.patch(`/api/v1/artist/${payload.id}/`, payload.data)
}
function api_v1_artist_delete(payload) {
  return samzAPI.delete(`/api/v1/artist/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return samzAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return samzAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return samzAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_terms_and_conditions_list(payload) {
  return samzAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return samzAPI.post(`/modules/terms-and-conditions/`, payload.data)
}
function modules_payments_payment_sheet_create(payload) {
  return samzAPI.post(`/modules/payments/payment_sheet/`)
}
function modules_social_auth_apple_login_create(payload) {
  return samzAPI.post(`/modules/social-auth/apple/login/`, payload.data)
}
function modules_social_auth_google_login_create(payload) {
  return samzAPI.post(`/modules/social-auth/google/login/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return samzAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function modules_social_auth_apple_connect_create(payload) {
  return samzAPI.post(`/modules/social-auth/apple/connect/`, payload.data)
}
function modules_terms_and_conditions_read(payload) {
  return samzAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return samzAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return samzAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_delete(payload) {
  return samzAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_social_auth_facebook_login_create(payload) {
  return samzAPI.post(`/modules/social-auth/facebook/login/`, payload.data)
}
function modules_social_auth_google_connect_create(payload) {
  return samzAPI.post(`/modules/social-auth/google/connect/`, payload.data)
}
function modules_social_auth_socialaccounts_list(payload) {
  return samzAPI.get(`/modules/social-auth/socialaccounts/`)
}
function rest_auth_registration_verify_email_create(payload) {
  return samzAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function modules_social_auth_facebook_connect_create(payload) {
  return samzAPI.post(`/modules/social-auth/facebook/connect/`, payload.data)
}
function modules_payments_get_payments_history_list(payload) {
  return samzAPI.get(`/modules/payments/get_payments_history/`)
}
function modules_payments_get_payments_methods_list(payload) {
  return samzAPI.get(`/modules/payments/get_payments_methods/`)
}
function modules_social_auth_socialaccounts_disconnect_create(payload) {
  return samzAPI.post(
    `/modules/social-auth/socialaccounts/${payload.id}/disconnect/`,
    payload.data
  )
}
export const apiService = {
  api_v1_buyer_list,
  api_v1_buyer_create,
  api_v1_event_list,
  api_v1_event_create,
  api_v1_login_create,
  api_v1_artist_list,
  api_v1_artist_create,
  api_v1_signup_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  api_v1_buyer_read,
  api_v1_buyer_update,
  api_v1_buyer_partial_update,
  api_v1_buyer_delete,
  api_v1_event_read,
  api_v1_event_update,
  api_v1_event_partial_update,
  api_v1_event_delete,
  api_v1_artist_read,
  api_v1_artist_update,
  api_v1_artist_partial_update,
  api_v1_artist_delete,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_payments_payment_sheet_create,
  modules_social_auth_apple_login_create,
  modules_social_auth_google_login_create,
  rest_auth_password_reset_confirm_create,
  modules_social_auth_apple_connect_create,
  modules_terms_and_conditions_read,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_delete,
  modules_social_auth_facebook_login_create,
  modules_social_auth_google_connect_create,
  modules_social_auth_socialaccounts_list,
  rest_auth_registration_verify_email_create,
  modules_social_auth_facebook_connect_create,
  modules_payments_get_payments_history_list,
  modules_payments_get_payments_methods_list,
  modules_social_auth_socialaccounts_disconnect_create
}
