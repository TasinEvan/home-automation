import axios from 'axios';

const BASE_URL = 'http://192.168.188.238'; // Ensure the URL includes the protocol

// Create axios instance with a base URL and optional timeout
const api = axios.create({ 
  baseURL: BASE_URL,
  timeout: 15000, // Optional: Timeout after 5 seconds
});

export const toggleRelay = async () => {
  try {
    const response = await api.get('/toggle');
    console.log('Raw API response:', response); 
    return response.data;
  } catch (error) {
    console.error('Error toggling relay:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getRelayStatus = async () => {
  try {
    const response = await api.get('/status');
    console.log('Raw API response:', response);
    return response.data;
  } catch (error) {
    console.error('Error getting relay status:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getSchedules = async () => {
  try {
    const response = await api.get('/schedules');
    console.log('Schedules response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error getting schedules:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const addSchedule = async (schedule) => {
  try {
    const response = await api.post('/schedules', schedule);
    console.log('Add schedule response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding schedule:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteSchedule = async (id) => {
  try {
    const response = await api.delete(`/schedules?id=${id}`);
    console.log('Delete schedule response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting schedule:', error.response ? error.response.data : error.message);
    throw error;
  }
};
