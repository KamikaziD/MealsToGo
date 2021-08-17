import React from "react";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SvgXml } from "react-native-svg";

import {
  Icon,
  Info,
  Address,
  RestaurantCard,
  RestaurantCardCover,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Roadside Cafe",
    icon = "https://www.kindpng.com/picc/m/57-575167_list-of-restaurants-restaurant-icon-white-png-transparent.png",
    photos = [
      "https://www.n3gateway.com/wp-content/uploads/2017/06/Clarens-Tourism-Clarens-Roadside-Cafe.jpg",
    ],
    address = "518 Sias Oosthuizen Street, Clarens",
    isOpenNow = true,
    rating = "4",
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
