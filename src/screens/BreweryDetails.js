import * as Linking from "expo-linking";
import { Button, Content, Icon, List, ListItem } from "native-base";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import FavouriteActions from "../store/reducers/favourite";

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("screen").width,
    height: 200,
  },
});

const BreweryDetails = ({ route }) => {
  const { brewery } = route.params;

  const dispatch = useDispatch();
  const isFavouriteBrewery = useSelector(
    ({ favourite }) => favourite.favourite !== null
  );

  useEffect(() => {
    dispatch(FavouriteActions.getFavourite(brewery.id.toString()));
  });

  return (
    <Content>
      <List style={{ backgroundColor: "white" }}>
        <ListItem itemDivider>
          <Text>Name</Text>
        </ListItem>

        <ListItem
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text>{brewery.name}</Text>
          </View>
          <View>
            <Button
              bordered={!isFavouriteBrewery}
              onPress={() =>
                dispatch(
                  isFavouriteBrewery
                    ? FavouriteActions.removeFavourite(brewery.id.toString())
                    : FavouriteActions.setFavourite({
                        id: brewery.id.toString(),
                        name: brewery.name,
                      })
                )
              }
              danger={isFavouriteBrewery}
              light={!isFavouriteBrewery}
            >
              <Icon name="heart" />
            </Button>
          </View>
        </ListItem>

        <ListItem itemDivider>
          <Text>Brewery Type</Text>
        </ListItem>

        <ListItem
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text>{brewery.breweryType}</Text>
          </View>
        </ListItem>

        <ListItem itemDivider>
          <Text>Phone</Text>
        </ListItem>

        <ListItem
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text onPress={() => Linking.openURL(`tel:${brewery.phone}`)}>
              {brewery.phone}
            </Text>
          </View>
        </ListItem>

        <ListItem itemDivider>
          <Text>Website</Text>
        </ListItem>

        <ListItem
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text onPress={() => Linking.openURL(brewery.websiteUrl)}>
              {brewery.websiteUrl}
            </Text>
          </View>
        </ListItem>

        <ListItem itemDivider>
          <Text>Ubication</Text>
        </ListItem>

        <ListItem
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>{brewery.state}</Text>
            <Text>{brewery.city}</Text>
            <Text>{brewery.street}</Text>
          </View>
        </ListItem>

        {brewery.latitude !== null || brewery.longitude !== null ? (
          <View>
            <ListItem itemDivider>
              <Text>Map</Text>
            </ListItem>

            <ListItem
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MapView
                initialRegion={{
                  latitude: parseFloat(brewery.latitude),
                  longitude: parseFloat(brewery.longitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={styles.mapStyle}
              >
                <Marker
                  coordinate={{
                    latitude: parseFloat(brewery.latitude),
                    longitude: parseFloat(brewery.longitude),
                  }}
                />
              </MapView>
            </ListItem>
          </View>
        ) : null}
      </List>
    </Content>
  );
};

export default BreweryDetails;
