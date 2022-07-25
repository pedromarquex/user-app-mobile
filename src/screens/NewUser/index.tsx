import React from "react";
import { Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";

function NewUser(): JSX.Element {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Novo Usuário",
    });
  }, [navigation]);

  return (
    <S.FormContainer>
      <S.TextInput
        size="large"
        label="Primeiro Nome"
        placeholder="Digite seu primeiro nome"
        accessoryLeft={<Icon name="person-outline" />}
      />
      <S.TextInput
        size="large"
        label="Último Nome"
        placeholder="Digite seu último nome"
        accessoryLeft={<Icon name="person-outline" />}
      />
      <S.TextInput
        size="large"
        label="Email"
        placeholder="Digite seu melhor email"
        accessoryLeft={<Icon name="email-outline" />}
      />
      <S.ConfirmButton>
        Salvar
        {/* <View> */}
        {/*  <Spinner size="small" status="basic" /> */}
        {/* </View> */}
      </S.ConfirmButton>
    </S.FormContainer>
  );
}

export { NewUser };
