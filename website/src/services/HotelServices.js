import axios from 'axios';
import { API_BASE_URL } from '../Constants';

/**
 * @description Retrieves hotels based on given filters.
 * @param {object} filters 
 */
export const GetHotels = (filters) => {
  return axios.get(`${API_BASE_URL}/hoteles`, { 
    params: filters
  });
}
