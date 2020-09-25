import { Container, Content } from "native-base";
import React, { useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SearchActions from "../../store/reducers/search";
import SearchHeader from "./SearchHeader";

const beerSeach = (searchText, dispatch) => {
  Keyboard.dismiss();
  const lowerSearchText = searchText.toLowerCase();
  dispatch(SearchActions.search(lowerSearchText));
};

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const searchResult = useSelector(({ search }) => search.searchResult);

  return (
    <Container>
      <SearchHeader
        value={searchText}
        onChangeText={(searchText) => setSearchText(searchText)}
        search={() => beerSeach(searchText, dispatch)}
      />
      <Content></Content>
    </Container>
  );
};

export default Search;
