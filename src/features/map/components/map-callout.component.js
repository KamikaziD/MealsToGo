import React from "react";

//import { MapCalloutInfo } from "./map-callout-info.component";

import { CompRestaurantInfo } from "../../../components/restaurant/comp-restaurant-info.component";

export const MapCallout = ({ restaurant }) => {
  return <CompRestaurantInfo isMap restaurant={restaurant} />;
};
