import React from "react";
import { Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import { Alert } from "react-native";
import * as S from "./styles";
import { api } from "../../services/api";

interface UserFormData {
  first_name: string;
  last_name: string;
  email: string;
}

function NewUser(): JSX.Element {
  const navigation = useNavigation();
  const [userFormData, setUserFormData] = React.useState({} as UserFormData);
  const [emailError, setEmailError] = React.useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Novo Usuário",
    });
  }, [navigation]);

  async function handleCreateUser() {
    const { first_name, last_name, email } = userFormData;

    if (!first_name || !last_name || !email) {
      Alert.alert("Erro", "Preencha todos os campos", [{ text: "OK" }]);
      return;
    }

    api
      .post(`/users/`, { first_name, last_name, email })
      .then(() => {
        Alert.alert("Sucesso", "Usuário Criado com sucesso!", [
          { text: "OK", onPress: () => navigation.goBack() },
        ]);
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data.error.includes("already exists")
        ) {
          setEmailError("Este email já está sendo utilizado");
          Alert.alert("Erro", "Este email já está sendo utilizado", [
            { text: "OK" },
          ]);
          return;
        }
        Alert.alert("Erro", "Erro ao criar usuário", [{ text: "OK" }]);
      });
  }

  return (
    <S.FormContainer>
      <S.TextInput
        size="large"
        value={userFormData.first_name}
        onChangeText={(text) => {
          setUserFormData({ ...userFormData, first_name: text });
        }}
        label="Primeiro Nome"
        placeholder="Digite seu primeiro nome"
        accessoryLeft={<Icon name="person-outline" />}
      />

      <S.TextInput
        size="large"
        value={userFormData.last_name}
        onChangeText={(text) => {
          setUserFormData({ ...userFormData, last_name: text });
        }}
        label="Último Nome"
        placeholder="Digite seu último nome"
        accessoryLeft={<Icon name="person-outline" />}
      />

      <S.TextInput
        size="large"
        value={userFormData.email}
        onChangeText={(text) => {
          setUserFormData({ ...userFormData, email: text });
          setEmailError("");
        }}
        label="Email"
        placeholder="Digite seu melhor email"
        status={emailError ? "danger" : "basic"}
        caption={emailError}
        accessoryLeft={<Icon name="email-outline" />}
      />
      <S.ConfirmButton onPress={handleCreateUser}>
        Salvar
        {/* <View> */}
        {/*  <Spinner size="small" status="basic" /> */}
        {/* </View> */}
      </S.ConfirmButton>
    </S.FormContainer>
  );
}

export { NewUser };
