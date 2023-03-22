import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Expo from "expo";

import FriendsPage from "./FriendsPage";
import MainPage from "./MainPage";
import Statistic from "./Statistic";

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer style={{ flex: 1 }}>
        <Stack.Navigator style={{ flex: 1 }}>
          <Stack.Screen
            style={{ flex: 1 }}
            name="Aqualink"
            component={MainPage}
            options={{
              headerStyle: {
                backgroundColor: "#2B2B2B",
                height: 100,
              },
              headerTintColor: "#73AAFC",
              headerTitleStyle: {
                fontSize: 41,
              },
            }}
          />
          <Stack.Screen
            style={{ flex: 1 }}
            name="FriendsPage"
            component={FriendsPage}
          />
          <Stack.Screen name="Statistic" component={Statistic} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

function testClick() {
  console.log("press");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
