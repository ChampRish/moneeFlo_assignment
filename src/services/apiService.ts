// src/services/apiService.ts
import axios from 'axios';

const api = axios.create({
  baseURL: "https://x8ki-letl-twmt.n7.xano.io/api:OW8cHK-3/auth/login", 
});

// Login function
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Login failed. Please check your credentials.');
  }
};

// Form submission function
export const submitFormData = async (formData: any) => {
  try {
    const response = await api.post('/form/submit', formData);
    return response.data;
  } catch (error) {
    throw new Error('Form submission failed.');
  }
};
