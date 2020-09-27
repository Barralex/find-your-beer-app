import * as Linking from "expo-linking";
import { Button, Content, Icon, List, ListItem } from "native-base";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("screen").width,
    height: 200,
  },
});

const BreweryDetails = ({ route }) => {
  const { brewery } = route.params;
  console.log("brewery", brewery);
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
            <Button bordered onPress={() => console.log("w")} light>
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
