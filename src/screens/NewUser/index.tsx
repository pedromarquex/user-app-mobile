import React from "react";
import { Icon, Input } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

function NewUser(): JSX.Element {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Novo Usuário",
    });
  }, [navigation]);

  return (
    <Input
      // value={value}
      label="Primeiro Nome"
      placeholder="Digite seu primeiro nome"
      // caption={renderCaption}
      accessoryLeft={<Icon name="person-outline" />}
      // onChangeText={nextValue => setValue(nextValue)}
    />
  );
}

export { NewUser };
