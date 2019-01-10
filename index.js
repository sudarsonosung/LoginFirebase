/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { config } from "./credentials/firebaseCredentials";

if (!firebase.apps.Length){
    firebase.initializeApp(config);
}

AppRegistry.registerComponent(appName, () => App);
