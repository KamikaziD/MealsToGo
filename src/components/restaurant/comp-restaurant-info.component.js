import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../spacer/spacer.component";
import { Platform } from "react-native";
import {
  MapCard,
  HeadingText,
  AddressText,
  Rating,
  Section,
  Icon,
  SectionEnd,
  CompactWebView,
  CompactImage,
} from "./comp-restaurant-info.styles";

import star from "../../../assets/star";
import open from "../../../assets/open";

const isAndroid = Platform.OS === "android";

export const CompRestaurantInfo = ({ restaurant, isMap }) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  const Image = isAndroid && isMap ? CompactWebView : CompactImage;

  return (
    <MapCard>
      <Image source={{ uri: restaurant.photos[0] }} />
      <HeadingText>{restaurant.name}</HeadingText>
      <Section>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml
              key={`star-${restaurant.placeId}-${i}`}
              xml={star}
              width={10}
              height={10}
            />
          ))}
        </Rating>
        <SectionEnd>
          <Spacer position="left" size="medium">
            {restaurant.isOpenNow && <SvgXml xml={open} width={8} height={8} />}
          </Spacer>
          <Spacer position="left" size="medium">
            <Icon source={{ uri: restaurant.icon }} />
          </Spacer>
        </SectionEnd>
      </Section>
      <AddressText>{restaurant.address}</AddressText>
    </MapCard>
  );
};
