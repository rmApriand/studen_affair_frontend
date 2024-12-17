import axios from 'axios';

const baseURL = 'http://localhost:8000/api';
const api = axios.create({
    baseURL: baseURL,
});


// Menambahkan token ke header jika ada
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token'); // Ambil token dari localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


// Function untuk melakukan request dengan menggunakan Axios
export const apiRequest = async (/** @type {any} */ endpoint, method = 'GET', data = null) => {
    try {
        const response = await api({
            url: endpoint,
            method: method,
            data: data,
        });
        return response.data;
    } catch (error) {
        console.error('API Request Error:', error);
        throw error; 
    }
};


// API fallback menggunakan fetch jika diperlukan
export const apiFetch = async (/** @type {string} */ endpoint, options = {}) => {
    const token = localStorage.getItem('access_token');
    const headers = {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(`${baseURL}/${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
};

// Menyediakan export default untuk axios jika hanya butuh axios
export default api;
