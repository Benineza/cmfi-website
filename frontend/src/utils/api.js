import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const submitContactForm = async (formData) => {
  try {
    const response = await api.post('/contact/submit', formData)
    return response.data
  } catch (error) {
    console.error('API Error:', error)
    throw error.response?.data || { success: false, message: 'Network error' }
  }
}

export const healthCheck = async () => {
  try {
    const response = await api.get('/contact/health')
    return response.data
  } catch (error) {
    console.error('Health check failed:', error)
    return null
  }
}

export default api