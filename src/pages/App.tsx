import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Browser } from "routes";
import { SafeAreaView, StatusBar } from "react-native";

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" translucent />
        <SafeAreaView style={{ paddingTop: 60, backgroundColor: "white", flex: 1 }}>
          <Browser />
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
