import React from "react";
import {
  AccountBackground,
  BackgroundCover,
  AccountContainer,
  HeadingText,
  SubmitButton,
} from "../components/account.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <BackgroundCover />
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
