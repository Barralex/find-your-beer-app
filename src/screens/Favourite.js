import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FavouriteActions from "../store/reducers/favourite";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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

const renderSeparator = () => {
  return <View style={listStyles.separator} />;
};

const renderItem = ({ item }, dispatch) => {
  return (
    <TouchableOpacity
      style={listStyles.row}
      onPress={() => dispatch(FavouriteActions.getFavouriteRequest(item[0]))}
    >
      <View>
        <Text style={listStyles.text}>{item[1]}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Favourite = () => {
  const dispatch = useDispatch();
  const favouriteList = useSelector(({ favourite }) => favourite.favouriteList);

  useEffect(() => {
    dispatch(FavouriteActions.getFavouriteList());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteList}
        renderItem={(item) => renderItem(item, dispatch)}
        keyExtractor={(item) => item[0].toString()}
        ItemSeparatorComponent={renderSeparator}
        onRefresh={() => dispatch(FavouriteActions.getFavouriteList())}
        refreshing={false}
      ></FlatList>
    </View>
  );
};

export default Favourite;
