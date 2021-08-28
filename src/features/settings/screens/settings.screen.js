import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";

import { SettingsItems, AvatarContainer } from "../components/settings.styles";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={160} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="caption">User Email:</Text>
          <Text variant="label">{user.email}</Text>
          <Spacer />
          <Text variant="caption">User ID:</Text>
          <Text variant="caption">{user.uid}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItems
          title="Favorites"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
          description="View your favorites"
          left={(props) => (
            <List.Icon {...props} color="black" icon="heart-outline" />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItems
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onLogOut}
        />
      </List.Section>
    </SafeArea>
  );
};
