import React from "react";
import {
  Button,
  Icon,
  ListItem,
  MenuItem,
  OverflowMenu,
} from "@ui-kitten/components";

import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import * as S from "./styles";

const data = new Array(6).fill({
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

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`user${index + 1}@mail.com`}
      accessoryRight={<Icon name="chevron-right" />}
    />
  );

  return <S.ListContainer data={data} renderItem={renderItem} />;
}

export { Home };
