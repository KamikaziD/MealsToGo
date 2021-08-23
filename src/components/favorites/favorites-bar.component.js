import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompRestaurantInfo } from "../restaurant/comp-restaurant-info.component";

const FavoritesWrapper = styled.View`
  padding: 10px;
`;
const FavoritesItemWrapper = styled.View`
  max-width: 140px;
  height: 168px;
`;

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavoritesWrapper>
      <Spacer position="left" size="medium">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <FavoritesItemWrapper>
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            </FavoritesItemWrapper>
          );
        })}
      </ScrollView>
    </FavoritesWrapper>
  );
};
