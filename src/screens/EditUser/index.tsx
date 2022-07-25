import React from "react";
import { Button, Icon } from "@ui-kitten/components";
import { useNavigation, useRoute } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import * as S from "./styles";
import { User } from "../../models/User";
import { api } from "../../services/api";

interface EditUserProps {
  userId: string;
}

function EditUser(): JSX.Element {
  const navigation = useNavigation();
  const route = useRoute();
  const [photo, setPhoto] = React.useState(null);
  const { userId } = route.params as EditUserProps;
  const [user, setUser] = React.useState<User>({} as User);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api.get(`/users/${userId}`).then((response) => {
      setUser(response.data);
      setLoading(false);
      setPhoto(response.data.avatar_url);
    });
  }, [userId]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Editar Usuário",
    });
  }, [navigation]);

  async function handleImagePicker(): Promise<void> {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const formData = new FormData();
    formData.append("avatar", {
      uri: result.uri,
      name: result.uri.split("/").pop(),
      type: "image/jpeg",
    });

    if (!result.cancelled) {
      api
        .put(`/users/${userId}/avatar`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          setPhoto(result.uri);
          Alert.alert("Sucesso", "Avatar atualizado com sucesso!", [
            { text: "OK" },
          ]);
        })
        .catch(() => {
          Alert.alert("Erro", "Erro ao atualizar avatar", [{ text: "OK" }]);
        });
    }
  }

  return (
    <>
      <S.ImageContainer>
        {!photo ? (
          <S.CameraIcon
            name="camera-outline"
            fill="#fff"
            onPress={handleImagePicker}
          />
        ) : (
          <S.SelectedImage
            source={{ uri: photo.replace("localhost", "10.0.2.2") }}
          />
        )}
      </S.ImageContainer>
      <S.ConfirmButton onPress={handleImagePicker}>Nova Imagem</S.ConfirmButton>
      <S.FormContainer>
        <S.TextInput
          size="large"
          value={user.first_name}
          onChangeText={(text) => {
            setUser({ ...user, first_name: text });
          }}
          label="Primeiro Nome"
          placeholder="Digite seu primeiro nome"
          accessoryLeft={<Icon name="person-outline" />}
        />
        <S.TextInput
          size="large"
          value={user.last_name}
          onChangeText={(text) => {
            setUser({ ...user, last_name: text });
          }}
          label="Último Nome"
          placeholder="Digite seu último nome"
          accessoryLeft={<Icon name="person-outline" />}
        />
        <S.TextInput
          size="large"
          value={user.email}
          onChangeText={(text) => {
            setUser({ ...user, email: text });
          }}
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
    </>
  );
}

export { EditUser };
