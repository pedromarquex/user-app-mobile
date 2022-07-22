import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";

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
    </Navigator>
  );
}
