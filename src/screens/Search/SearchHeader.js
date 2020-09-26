import { Header, Icon, Input, Item } from "native-base";
import React from "react";

const SearchHeader = ({ value, onChangeText, search }) => {
  return (
    <Header searchBar rounded style={{ height: 80 }}>
      <Item>
        <Icon name="ios-search"></Icon>
        <Input
          placeholder="Enter search term"
          returnKeyType="search"
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={search}
        />
      </Item>
    </Header>
  );
};

export default SearchHeader;
