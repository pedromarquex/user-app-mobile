import React from "react";
import { Icon } from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";
import * as S from "./styles";

// {
//   "id": "be60887a-bd2b-42ce-8c23-c0d7669b1dfc",
//   "first_name": "User1",
//   "last_name": "Tester",
//   "email": "user1@mail.com",
//   "created_at": "2022-07-23T17:40:40.502Z",
//   "avatar": null
// }

function EditUser(): JSX.Element {
  const navigation = useNavigation();
  const [photo, setPhoto] = React.useState(null);

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

    if (!result.cancelled) {
      setPhoto(result);
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
          <S.SelectedImage source={{ uri: photo.uri }} />
        )}
      </S.ImageContainer>
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
    </>
  );
}

export { EditUser };
