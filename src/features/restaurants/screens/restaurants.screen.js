import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
}`;

const SearchView = styled(View)`
  padding: 16px;
`;

const ListView = styled(View)`
  flex: 1;
  background-color: "rgb(5,188,230)";
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search Restaurants" />
      </SearchView>
      <ListView>
        <RestaurantInfo />
      </ListView>
    </SafeArea>
  );
};
