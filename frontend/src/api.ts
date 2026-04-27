import axios from 'axios'

// same port as backend
export const api = axios.create({
    baseURL: 'http://localhost:4000',
})