import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

// Attach CSRF token for Django
api.interceptors.request.use((config) => {
  const csrfToken = getCookie('csrftoken')
  if (csrfToken) config.headers['X-CSRFToken'] = csrfToken
  return config
})

function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
  return null
}

export const submitContact = (data) => api.post('/contact/', data)

export default api
