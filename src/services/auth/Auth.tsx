import axios from 'axios'
import { API_URL } from '../../GlobalVariable'

export const LoginServices = async (data) => {
  const url = `${API_URL}/access/sign-in`
  return axios.post(url, data)
}

export const VerifyOtpServices = async (data) => {
  const url = `${API_URL}/access/verify-otp`
  return axios.post(url, data);
}

export const SignupServices = async (data) => {
  const url = `${API_URL}/access/sign-up`
  return axios.post(url, data);
}

export const forgetpasswordServices = async (data) => {
  const url = `${API_URL}/access/verify-otp`
  return axios.post(url, data);
}

export const changepasswordServices = async (data) => {
  const url = `${API_URL}/access/reset-password`
  return axios.post(url, data);
}

export const generateOtpServices = async (data) => {
  const url = `${API_URL}/access/verify-otp`
  return axios.post(url, data);
}
