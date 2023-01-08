import { AppRegistry } from "react-native";
import App from "./src/pages/App";
// @ts-ignore
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
