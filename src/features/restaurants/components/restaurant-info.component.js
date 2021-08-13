import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding-top: 10px;
  font-weight: bold;
  font-size: 18px;
`;

const Text = styled.Text`
  color: "rgb(85,105,125)";
  font-size: 12px;
`;

const RestaurantCard = styled(Card)`
  background-color: "rgb(255,255,255)";
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: "rgb(255,255,255)";
`;

const CardInfo = styled(Card.Content)`
  background-color: "rgb(255,255,255)";
  border-radius: 5px;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Roadside Cafe",
    icon,
    photos = [
      "https://www.n3gateway.com/wp-content/uploads/2017/06/Clarens-Tourism-Clarens-Roadside-Cafe.jpg",
    ],
    address = "518 Sias Oosthuizen Street, Clarens",
    isOpenNow = true,
    rating = "4",
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <CardInfo>
        <Title>{name}</Title>
        <Text>{address}</Text>
      </CardInfo>
    </RestaurantCard>
  );
};
