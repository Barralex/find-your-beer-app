import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SearchActions from "../../store/reducers/search";
import SearchHeader from "./SearchHeader";

const listStyles = StyleSheet.create({
  list: {
    flex: 12,
    width: "100%",
  },
  row: {
    padding: 15,
    marginBottom: 5,
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
  },
  breweryItem: {
    flex: 1,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#D3D3D3",
    shadowOpacity: 1,
  },
});

const beerSeach = (searchText, dispatch) => {
  Keyboard.dismiss();
  const lowerSearchText = searchText.toLowerCase();
  dispatch(SearchActions.search(lowerSearchText));
};

const renderSeparator = () => {
  return <View style={listStyles.separator} />;
};

const renderItem = ({ item }, navigation) => {
  return (
    <TouchableOpacity
      style={listStyles.row}
      onPress={() => navigation.navigate("BreweryDetails", { brewery: item })}
    >
      <View style={listStyles.breweryItem}>
        <Text style={listStyles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const searchResult = useSelector(({ search }) => search.searchResult);

  return (
    <View>
      <SearchHeader
        value={searchText}
        onChangeText={(searchText) => setSearchText(searchText)}
        search={() => beerSeach(searchText, dispatch)}
      />

      <FlatList
        data={searchResult}
        renderItem={(item) => renderItem(item, navigation)}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      ></FlatList>
    </View>
  );
};

export default Search;
