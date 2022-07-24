import styled from "styled-components/native";
import { Input, Button, Icon } from "@ui-kitten/components";

export const FormContainer = styled.View`
  width: 90%;
  align-self: center;
  margin: 20px 0 0 0;
`;

export const TextInput = styled(Input)`
  margin-bottom: 10px;
`;

export const ConfirmButton = styled(Button)`
  margin-top: 20px;
`;

export const ImageContainer = styled.View`
  margin-top: 20px;
  width: 90%;
  height: 200px;
  border-radius: 8px;
  background-color: #ccc;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const SelectedImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  resize-mode: contain;
`;

export const CameraIcon = styled(Icon)`
  width: 40px;
  height: 40px;
`;
