function getApi() {
  const fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  .then((response)=>response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
}

export default getApi;
