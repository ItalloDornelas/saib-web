import axios from 'axios';

export function apiClient() {
  const api = axios.create({
    baseURL: 'https://interno.saibweb.com.br/api/v1/teste/',
  });

  return api;
}
