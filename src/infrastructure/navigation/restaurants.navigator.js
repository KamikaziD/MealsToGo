import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const screenOptions = {
  headerShown: false,
  ...TransitionPresets.ModalPresentationIOS,
};

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator screenOptions={screenOptions}>
      <RestaurantsStack.Screen
        name="Restaurant"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailsScreen}
      />
    </RestaurantsStack.Navigator>
  );
};
