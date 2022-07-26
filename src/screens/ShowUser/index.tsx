import React from "react";
import {
  Icon,
  MenuItem,
  OverflowMenu,
  Spinner,
  Text,
} from "@ui-kitten/components";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import * as S from "./styles";
import { User } from "../../models/User";
import { api } from "../../services/api";
import { parseDateTime } from "../../services/date";
import defaultAvatar from "../../assets/images/default-avatar.png";

interface showUserProps {
  userId: string;
}

function ShowUser(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const [visible, setVisible] = React.useState(false);
  const { userId } = route.params as showUserProps;
  const [user, setUser] = React.useState<User>({} as User);
  const [loading, setLoading] = React.useState(true);

  const loadUser = React.useCallback(() => {
    api.get(`/users/${userId}`).then((response) => {
      setUser(response.data);
      setLoading(false);
    });
  }, [userId]);

  React.useEffect(() => {
    loadUser();
  }, [loadUser]);

  useFocusEffect(() => {
    loadUser();
  });

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Visualizar Usuário",
      headerRight: () => (
        <OverflowMenu
          anchor={() => (
            <Icon
              onPress={() => setVisible(true)}
              name="more-vertical"
              fill="#fff"
              style={{ width: 26, height: 26 }}
            />
          )}
          visible={visible}
          // selectedIndex={selectedIndex}
          onSelect={() => setVisible(false)}
          onBackdropPress={() => setVisible(false)}
        >
          <MenuItem
            title="Editar Usuário"
            onPress={() => navigation.navigate("EditUser", { userId })}
          />
        </OverflowMenu>
      ),
    });
  }, [navigation, userId, visible]);

  return (
    <S.UserInfoContainer>
      {loading ? (
        <Spinner size="giant" />
      ) : (
        <>
          {user.avatar ? (
            <S.UserAvatar
              source={{
                uri: user?.avatar_url?.replace("localhost", "10.0.2.2"),
              }}
            />
          ) : (
            <S.UserAvatar source={defaultAvatar} />
          )}
          <Text category="h6">Primeiro Nome:</Text>
          <S.UserDetailText category="p1">{user.first_name}</S.UserDetailText>

          <Text category="h6">Último Nome:</Text>
          <S.UserDetailText category="p1">{user.last_name}</S.UserDetailText>

          <Text category="h6">Email:</Text>
          <S.UserDetailText category="p1">{user.email}</S.UserDetailText>

          <Text category="h6">Criado em:</Text>
          <S.UserDetailText category="p1">
            {parseDateTime(user?.created_at)}
          </S.UserDetailText>
        </>
      )}
    </S.UserInfoContainer>
  );
}

export { ShowUser };
