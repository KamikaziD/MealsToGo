import React from "react";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  MapCard,
  MapCardCover,
  HeadingText,
  AddressText,
  View,
  Rating,
  Section,
  Icon,
  SectionEnd,
} from "./map-callout.styles";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const MapCalloutInfo = ({ restaurant }) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));

  return (
    <View>
      <MapCard>
        <MapCardCover
          key={restaurant.name}
          source={{ uri: restaurant.photos[0] }}
        />
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
              {restaurant.isOpenNow && (
                <SvgXml xml={open} width={8} height={8} />
              )}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: restaurant.icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <AddressText>{restaurant.address}</AddressText>
      </MapCard>
    </View>
  );
};
