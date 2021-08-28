import { ImageBackground, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";

export const AuthInput = styled(TextInput).attrs({
  mode: "flat",
  underlineColor: colors.brand.secondary,
})`
  width: 280px;
  justify-content: center;
`;

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/MealsBGImage.jpeg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

export const SubmitBackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const SubmitBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/account_screen_bg.jpeg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeadingText = styled(Text)`
  align-items: center;
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const AccountContainer = styled.View`
  border-radius: 15px;
  background-color: #55999966;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const SubmitButton = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[2]};
  width: 278px;
`;

export const SubmitHeadingText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const SubmitForm = styled(View)`
  padding: 20px;
  flex: 0.7;
  justify-content: center;
`;

export const HeadingContainer = styled(View)`
  padding-top: 20px;
  align-items: center;
`;

export const SubmitContainer = styled(View)`
  padding-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const ErrorContainer = styled(View)`
  max-width: 280px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 10px;
  padding: ${(props) => props.theme.space[2]};
`;
