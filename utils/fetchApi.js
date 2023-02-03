import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '760cb4cdb5mshb4c49d4d3dc9a86p1d74edjsn18bc539ed746',
    },
  });

  return data;
};
