import styled from "styled-components/native";
import { Icon } from "@ui-kitten/components";

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px 0 10px 0;
`;

export const NextPageButton = styled(Icon)`
  margin-left: 8px
  width: 45px;
  height: 45px;
  tint-color: black;
`;

export const PreviousPageButton = styled(NextPageButton)`
  margin: 0;
`;
