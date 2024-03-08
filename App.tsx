/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import styles from "./src/screens/HomeScreen/HomeScreen.styles";

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: "TV Shows",
            headerRight: () => (
              <TouchableOpacity style={styles.searchButton}>
                <Text>Search...</Text>
              </TouchableOpacity>
            )
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
