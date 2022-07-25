import styled from "styled-components/native";
import { Card, Icon, Spinner } from "@ui-kitten/components";

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px 0 10px 0;
`;

export const NextPageButton = styled(Icon)`
  margin-left: 8px;
  width: 45px;
  height: 45px;
  tint-color: black;
`;

export const PreviousPageButton = styled(NextPageButton)`
  margin: 0;
`;

export const UserCard = styled(Card)`
  width: 45%;
  margin: 10px 5px 5px 5px;
`;

export const UsersContainer = styled.View`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const UserDetailIcon = styled(Icon)`
  width: 60px;
  height: 60px;
`;

export const LoadingContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
