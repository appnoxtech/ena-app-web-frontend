import axios from 'axios'
import { API_URL } from '../../GlobalVariable'

export const LoginServices = async (data) => {
  const url = `${API_URL}/access/sign-in`
  console.log(data, 'is colliect')
  return axios.post(url, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export const VerifyOtpServices = async (data) => {
  const url = `${API_URL}/access/verify-otp`
  console.log(data, 'is colliect')
  return axios.post(url, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export const SignupServices = async (data) => {
  const url = `${API_URL}/access/sign-up`
  console.log(data, 'is colliect')
  return axios.post(url, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export const forgetpasswordServices = async (data) => {
  console.log(data)
  const url = `${API_URL}/access/verify-otp`
  console.log(data, 'is colliect')
  return axios.post(url, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export const changepasswordServices = async (data) => {
  console.log(data)
  const url = `${API_URL}/access/reset-password`
  console.log(data, url, 'is colliect')
  return axios.post(url, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}

export const generateOtpServices = async (data) => {
  console.log(data)
  const url = `${API_URL}/access/verify-otp`
  console.log(data, url, 'is colliect')
  return axios.post(url, data, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })
}
