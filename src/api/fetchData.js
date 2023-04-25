import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api/people/1';

const fetchSearchMovies = async () => {
  const response = await axios.get(BASE_URL);

  return response.data;
};

export default fetchSearchMovies;
