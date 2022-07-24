import React from "react";
import { Icon, MenuItem, OverflowMenu, Text } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import * as S from "./styles";

function ShowUser(): JSX.Element {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

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
            onPress={() => navigation.navigate("EditUser")}
          />
        </OverflowMenu>
      ),
    });
  }, [navigation, visible]);

  return (
    <S.UserInfoContainer>
      <Text category="h6">Primeiro Nome:</Text>
      <S.UserDetailText category="p1">Usuário</S.UserDetailText>

      <Text category="h6">Último Nome:</Text>
      <S.UserDetailText category="p1">Silva</S.UserDetailText>

      <Text category="h6">Email:</Text>
      <S.UserDetailText category="p1">usuario@mail.com</S.UserDetailText>

      <Text category="h6">Criado em:</Text>
      <S.UserDetailText category="p1">
        27 de Abril de 2021 às 13h
      </S.UserDetailText>
    </S.UserInfoContainer>
  );
}

export { ShowUser };
