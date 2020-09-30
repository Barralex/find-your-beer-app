import HttpClient from "./HttpClient";

const SEARCH_BREWERY = "breweries/search?query=:searchValue";
const GET_BREWERY = "breweries/:breweryId";

const APIClient = {
  search(searchValue) {
    return HttpClient.get(SEARCH_BREWERY.replace(":searchValue", searchValue));
  },
  getBreweryById(id) {
    return HttpClient.get(GET_BREWERY.replace(":breweryId", id));
  },
};

export default APIClient;
