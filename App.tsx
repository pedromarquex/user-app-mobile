import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          {/* eslint-disable-next-line react/style-prop-object */}
          <StatusBar style="light" />
          <Routes />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}
