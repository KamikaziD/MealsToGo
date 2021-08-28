import React, { useState, useContext } from "react";
import { TextInput, ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  AuthInput,
  ErrorContainer,
  SubmitBackground,
  SubmitBackgroundCover,
  SubmitButton,
  SubmitHeadingText,
  SubmitForm,
  HeadingContainer,
  SubmitContainer,
} from "../components/account.styles";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error } = useContext(AuthenticationContext);

  return (
    <SubmitBackground>
      <SubmitBackgroundCover />
      <HeadingContainer>
        <SubmitHeadingText>Login to your Account</SubmitHeadingText>
      </HeadingContainer>
      <SubmitForm>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
          right={<TextInput.Icon name="email" color="grey" />}
        />
        <Spacer size="large" />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
          right={<TextInput.Icon name="lock" color="grey" />}
        />
        <Spacer size="large" />
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(rp) => setRepeatedPassword(rp)}
          right={<TextInput.Icon name="lock" color="grey" />}
        />
        <Spacer size="large" />
        <SubmitContainer>
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
          <Spacer size="large" />
          {!isLoading ? (
            <SubmitButton
              icon="pen"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </SubmitButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </SubmitContainer>
      </SubmitForm>
    </SubmitBackground>
  );
};
