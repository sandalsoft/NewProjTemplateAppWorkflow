import axios from 'axios';

export const fetchData = async (url) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return new Promise.reject(err);
  }
};
