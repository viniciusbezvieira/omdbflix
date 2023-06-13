import axios from 'axios';

const Api = async (queryParams = {}) => {
  return await axios({
    url: 'http://www.omdbapi.com/',
    params: { ...queryParams, apikey: '5c9491b8' },
  });
};

export default Api;
