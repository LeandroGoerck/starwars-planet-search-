const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = () => (
  fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => (error))
);

export default getApi;
