import * as Linking from "expo-linking";
import { Button, Content, Icon, List, ListItem } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

const styles = StyleSheet.create({
  mapStyle: {
    width: 200,
    height: 100,
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
            <Button bordered onPress={() => console.log("w")} danger>
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
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <View>
            <Text>{brewery.state}</Text>
            <Text>{brewery.city}</Text>
            <Text>{brewery.street}</Text>
          </View>

          {brewery.latitude !== null || brewery.longitude !== null ? (
            <View>
              <MapView
                initialRegion={{
                  latitude: parseFloat(brewery.latitude, 10),
                  longitude: parseFloat(brewery.longitude, 10),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                style={styles.mapStyle}
              />
            </View>
          ) : null}
        </ListItem>
      </List>
    </Content>
  );
};

export default BreweryDetails;
