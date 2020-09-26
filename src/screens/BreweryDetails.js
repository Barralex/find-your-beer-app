import * as Linking from "expo-linking";
import { Button, Content, Icon, List, ListItem } from "native-base";
import React from "react";
import { Text, View } from "react-native";

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
        </ListItem>
      </List>
    </Content>
  );
};

export default BreweryDetails;
