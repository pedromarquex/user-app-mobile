import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewUser } from "../screens/NewUser";

const { Screen, Navigator } = createNativeStackNavigator();

export function AppStackRoutes(): JSX.Element {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0D0D0D",
        },
        headerTintColor: "#fff",
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="NewUser" component={NewUser} />
    </Navigator>
  );
}
