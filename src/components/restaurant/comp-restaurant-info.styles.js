import styled from "styled-components/native";
import { Card } from "react-native-paper";
import MapView from "react-native-maps";
import WebView from "react-native-webview";

export const MapCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.sizes[5]};
  height: 165px;
`;

export const CompactImage = styled(Card.Cover)`
  border-radius: 5px;
  width: 120px;
  height: 100px;
`;

export const HeadingText = styled.Text`
  align-self: center;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: tomato;
  font-size: ${(props) => props.theme.fontSizes.cardcaption};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const AddressText = styled.Text`
  align-self: center;
  color: ${(props) => props.theme.colors.ui.secondary};
  font-size: ${(props) => props.theme.fontSizes.card};
  font-family: ${(props) => props.theme.fonts.body};
  padding-bottom: ${(props) => props.theme.sizes[5]};
`;

export const View = styled(MapView.Callout)`
  width: 165px;
  height: 180px;
  justify-content: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[0]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: ${(props) => props.theme.sizes[0]};
  height: ${(props) => props.theme.sizes[0]};
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CompactWebView = styled(WebView)`
  border-radius: 5px;
  width: 120px;
  height: 100px;
`;
