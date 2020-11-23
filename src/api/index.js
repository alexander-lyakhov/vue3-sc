import axios from 'axios';

axios.defaults.baseURL = 'https://www.sportchek.ca/services/sportchek/search-and-promote';
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const getProducts = (params) => {
  console.log(params)
  return axios.get('/products', {params});
}

export default {
  getProducts
}
