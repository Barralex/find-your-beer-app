import Axios from "axios";
import { Container, Content } from "native-base";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import SearchHeader from "./SearchHeader";

const beerSeach = (searchText) => {
  Keyboard.dismiss();
  const lowerSearchText = searchText.toLowerCase();

  const query =
    "https://api.openbrewerydb.org/breweries/search?query=" + lowerSearchText;

  Axios.get(query).then((response) => {
    console.log(response.data);
  });
};

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <Container>
      <SearchHeader
        value={searchText}
        onChangeText={(searchText) => setSearchText(searchText)}
        search={() => beerSeach(searchText)}
      />

      <Content></Content>
    </Container>
  );
};

export default Search;
