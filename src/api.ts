import axios from 'axios';
import { getCache, setCache } from './db';

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({ baseURL: API_URL });

export async function fetchWithCache(endpoint: string) {
  try {
    const response = await api.get(endpoint);
    await setCache(endpoint, response.data);
    return response.data;
  } catch (err) {
    const cached = await getCache(endpoint);
    if (cached) return cached;
    throw err;
  }
}
