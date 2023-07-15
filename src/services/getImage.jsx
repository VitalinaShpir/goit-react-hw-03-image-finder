import axios from 'axios';

// const API_KEY = '36895076-5934d2f855119bc6ea2b7e918';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   key: API_KEY,
//   orientation: 'horizontal',
//   per_page: 12,
// };

// export const getImagesAPI = async ({ value, page }) => {
//   const response = await axios.get(`?key=${API_KEY}&q=${value}`);
//   return response.data;
// };

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '36895076-5934d2f855119bc6ea2b7e918';
const perPage = 12;

export async function getImagesAPI(value, page, signal) {
  const response = await axios.get(BASE_URL, {
    signal,
    params: {
      key: API_KEY,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
      page: page,
    },
  });

  return response.data;
}
