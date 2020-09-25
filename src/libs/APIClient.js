import HttpClient from "./HttpClient";

const SEARCH_BREWETY = "breweries/search?query=:searchValue";

const APIClient = {
  search(searchValue) {
    return HttpClient.get(SEARCH_BREWETY.replace(":searchValue", searchValue));
  },
};

export default APIClient;
