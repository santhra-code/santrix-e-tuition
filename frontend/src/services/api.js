import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
  signup: (userData) => api.post('/auth/signup', userData),
  logout: () => api.post('/auth/logout'),
  getCurrentUser: () => api.get('/auth/me'),
  updateProfile: (data) => api.put('/auth/profile', data),
  changePassword: (data) => api.post('/auth/change-password', data),
}

export const courseApi = {
  getAllCourses: (filters) => api.get('/courses', { params: filters }),
  getCourseById: (id) => api.get(`/courses/${id}`),
  createCourse: (data) => api.post('/courses', data),
  updateCourse: (id, data) => api.put(`/courses/${id}`, data),
  deleteCourse: (id) => api.delete(`/courses/${id}`),
  getCategories: () => api.get('/courses/categories/all')
}

export const teacherApi = {
  getAllTeachers: (filters) => api.get('/teachers', { params: filters }),
  getTeacherById: (id) => api.get(`/teachers/${id}`),
  getTeacherProfile: () => api.get('/teachers/profile/me'),
  updateProfile: (data) => api.put('/teachers/profile', data),
  searchTeachers: (query) => api.get('/teachers/search', { params: { q: query } }),
}

export const bookingApi = {
  bookDemo: (data) => api.post('/bookings/demo', data),
  getBookings: () => api.get('/bookings'),
  cancelBooking: (id) => api.delete(`/bookings/${id}`),
}

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
