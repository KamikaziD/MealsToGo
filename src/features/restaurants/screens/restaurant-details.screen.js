import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const handleBreakfast = () => setBreakfastExpanded(!breakfastExpanded);
  const handleLunch = () => setLunchExpanded(!lunchExpanded);
  const handleDinner = () => setDinnerExpanded(!dinnerExpanded);
  const handleDrinks = () => setDrinksExpanded(!drinksExpanded);

  const { restaurant } = route.params;

  const MenuOptions = () => {
    return (
      <List.Section title={restaurant.name}>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="coffee" />}
          expanded={breakfastExpanded}
          onPress={handleBreakfast}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
          <List.Item title="English Breakfast" />
          <List.Item title="Pancake Stack" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={handleLunch}
        >
          <List.Item title="Beef Burger & Chips" />
          <List.Item title="Club Sandwich" />
          <List.Item title="Leaf Salad" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={handleDinner}
        >
          <List.Item title="Spagetti Bolognaise" />
          <List.Item title="Lasagna" />
          <List.Item title="300g Beef Fillet & Chips" />
          <List.Item title="1/2 Chicken Peri-Peri" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={handleDrinks}
        >
          <List.Item title="Soft Drinks" />
          <List.Item title="Beer" />
          <List.Item title="Wine" />
          <List.Item title="Coffee & Tea" />
        </List.Accordion>
      </List.Section>
    );
  };

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <MenuOptions />
      </ScrollView>
    </SafeArea>
  );
};
