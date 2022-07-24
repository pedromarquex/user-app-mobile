import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewUser } from "../screens/NewUser";
import { ShowUser } from "../screens/ShowUser";
import { EditUser } from "../screens/EditUser";

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
      <Screen name="ShowUser" component={ShowUser} />
      <Screen name="EditUser" component={EditUser} />
    </Navigator>
  );
}
