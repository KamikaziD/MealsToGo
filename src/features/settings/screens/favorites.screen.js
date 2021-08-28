import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { RestaurantsList } from "../../restaurants/components/restaurant-list.styles";

import { FavoritesContext } from "../../../services/favorites/favorites.context";

const NoFavoritesContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantsList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <SafeArea>
      <NoFavoritesContainer>
        <Text variant="hint">No favorites yet</Text>
      </NoFavoritesContainer>
    </SafeArea>
  );
};
