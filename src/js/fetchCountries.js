export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
    resp => {
      if (resp.status === 404) {
        return 'error';
      }
      return resp.json();
    },
  );
}
