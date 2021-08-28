import React from "react";
import {
  AccountBackground,
  BackgroundCover,
  AccountContainer,
  HeadingText,
  SubmitButton,
  AnimationWrapper,
} from "../components/account.styles";

import LottieView from "lottie-react-native";

import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackgroundCover />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/lf30_editor_xby5ntc2.json")}
        />
      </AnimationWrapper>
      <HeadingText>Meals To Go</HeadingText>
      <Spacer size="large" />
      <AccountContainer>
        <Spacer size="large" />
        <SubmitButton
          icon="pen"
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          Register
        </SubmitButton>
        <Spacer size="large" />
        <SubmitButton
          icon="lock-open-outline"
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </SubmitButton>
        <Spacer size="medium" />
      </AccountContainer>
    </AccountBackground>
  );
};
