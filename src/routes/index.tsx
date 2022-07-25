import { NavigationContainer } from "@react-navigation/native";
import { AppStackRoutes } from "./app.stack.routes";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      NewUser: undefined;
      ShowUser: { userId: string };
      EditUser: undefined;
    }
  }
}

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
