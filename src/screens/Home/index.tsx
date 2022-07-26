import React from "react";
import {
  Button,
  Icon,
  MenuItem,
  OverflowMenu,
  Spinner,
  Text,
} from "@ui-kitten/components";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

import * as S from "./styles";
import { ScrollViewContainer } from "../../components/ScrollViewContainer";
import defaultAvatar from "../../assets/images/default-avatar.png";
import { api } from "../../services/api";
import { User } from "../../models/User";

interface UsersListResponse {
  total: number;
  per_page: number;
  page: number;
  total_pages: number;
  users: User[];
}

function Home(): JSX.Element {
  const navigation = useNavigation();

  const [usersListing, setUsersListing] = React.useState<UsersListResponse>(
    {} as UsersListResponse
  );
  const [visible, setVisible] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);

  const loadUsers = React.useCallback(() => {
    setLoading(true);
    api.get(`/users?page=${page}`).then((response) => {
      setUsersListing(response.data);
      setPage(response.data.page);
      setLoading(false);
    });
  }, [page]);

  React.useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Usuários",
      headerRight: () => (
        <OverflowMenu
          anchor={() => (
            <Icon
              onPress={() => setVisible(true)}
              name="more-vertical"
              fill="#fff"
              style={{ width: 26, height: 26 }}
            />
          )}
          visible={visible}
          // selectedIndex={selectedIndex}
          onSelect={() => setVisible(false)}
          onBackdropPress={() => setVisible(false)}
        >
          <MenuItem
            title="Criar usuário"
            onPress={() => navigation.navigate("NewUser")}
          />
        </OverflowMenu>
      ),
    });
  }, [navigation, visible]);

  useFocusEffect(() => {
    api.get(`/users?page=${page}`).then((response) => {
      setUsersListing(response.data);
    });
  });

  const handleNextPage = React.useCallback(() => {
    if (page < usersListing.total_pages) {
      setPage(page + 1);
    }
  }, [page, usersListing.total_pages]);

  const handlePreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  return (
    <ScrollViewContainer>
      {loading ? (
        <S.LoadingContainer>
          <Spinner size="giant" />
        </S.LoadingContainer>
      ) : (
        <>
          <S.UsersContainer>
            {usersListing.users?.map((user) => (
              <S.UserCard
                key={user.id}
                onPress={() =>
                  navigation.navigate("ShowUser", { userId: user.id })
                }
              >
                {user.avatar ? (
                  <Image
                    source={{
                      uri: user?.avatar_url?.replace("localhost", "10.0.2.2"),
                    }}
                    style={{
                      width: "100%",
                      height: 200,
                      resizeMode: "cover",
                    }}
                  />
                ) : (
                  <Image
                    source={defaultAvatar}
                    style={{
                      width: "100%",
                      height: 200,
                      resizeMode: "contain",
                    }}
                  />
                )}
                <Text category="h6">{`${user.first_name} ${user.last_name}`}</Text>
                <Text>{user.email}</Text>
                <Button
                  onPress={() =>
                    navigation.navigate("ShowUser", { userId: user.id })
                  }
                  appearance="ghost"
                  status="basic"
                  accessoryRight={<S.UserDetailIcon name="chevron-right" />}
                >
                  Detalhes
                </Button>
              </S.UserCard>
            ))}
          </S.UsersContainer>
          <S.PaginationContainer>
            <S.PreviousPageButton
              name="chevron-left"
              onPress={handlePreviousPage}
            />
            <S.NextPageButton name="chevron-right" onPress={handleNextPage} />
          </S.PaginationContainer>
        </>
      )}
    </ScrollViewContainer>
  );
}

export { Home };
