import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

//PROVIDERS
import { ThemeProvider } from "styled-components/native";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

//FIREBASE
import * as firebase from "firebase";

//INFRASTRUCTURE
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const firebaseConfig = {
  apiKey: "AIzaSyB5Aw28_ULqslS0WxUgEpfLOfMJNl-1sGg",
  authDomain: "mealstogo-72aa7.firebaseapp.com",
  projectId: "mealstogo-72aa7",
  storageBucket: "mealstogo-72aa7.appspot.com",
  messagingSenderId: "1010929081447",
  appId: "1:1010929081447:web:b8234f54c2180d598a08c2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
