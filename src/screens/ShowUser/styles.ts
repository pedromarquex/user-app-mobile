import { Text } from "@ui-kitten/components";
import styled from "styled-components/native";

export const UserInfoContainer = styled.View`
  margin: 20px;
`;

export const UserAvatar = styled.Image.attrs({
  style: {
    resizeMode: "contain",
  },
})`
  width: 100%;
  align-self: center;
  height: 200px;
  margin-bottom: 20px;
`;

export const UserDetailText = styled(Text)`
  margin-bottom: 10px;
`;
