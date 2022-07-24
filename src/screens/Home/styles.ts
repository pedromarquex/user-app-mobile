import styled from "styled-components/native";
import { Icon, List } from "@ui-kitten/components";

export const ListContainer = styled(List)``;

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const NextPageButton = styled(Icon)`
  margin-left: 8px;
  width: 40px;
  height: 40px;
  tint-color: black;
`;

export const PreviousPageButton = styled(NextPageButton)`
  margin: 0;
`;
