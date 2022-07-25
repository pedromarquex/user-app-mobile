import React from "react";
import {
  Card,
  Icon,
  MenuItem,
  OverflowMenu,
  Text,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import { Image } from "react-native";
import * as S from "./styles";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import defaultAvatar from "../../assets/images/default-avatar.png";

const data = new Array(22).fill({
  title: "User",
  description: "User description",
});

function Home(): JSX.Element {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Usuários",
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
            title="Criar usuário"
            onPress={() => navigation.navigate("NewUser")}
          />
        </OverflowMenu>
      ),
    });
  }, [navigation, visible]);

  return (
    <ScrollViewContainer>
      {data.map((item, index) => (
        <Card onPress={() => navigation.navigate("ShowUser")}>
          <Image
            source={defaultAvatar}
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
          />
          <Text category="h6">{`${item.title} ${index + 1}`}</Text>
          <Text>{`user${index + 1}@mail.com`}</Text>
        </Card>
      ))}
      <S.PaginationContainer>
        <S.PreviousPageButton name="chevron-left" />
        <S.NextPageButton name="chevron-right" />
      </S.PaginationContainer>
    </ScrollViewContainer>
  );
}

export { Home };
