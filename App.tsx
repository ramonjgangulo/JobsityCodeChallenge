
import React from 'react';
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import ShowScreen from "./src/screens/ShowScreen/ShowScreen";
import EpisodeScreen from "./src/screens/EpisodeScreen/EpisodeScreen";

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
              <TouchableOpacity style={styles.searchButton} onPress={() => navigation.push('Search')}>
                <Text>Search...</Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen
          name="ShowDetails"
          component={ShowScreen}
          options={({route}) => ({ title: route.params.title }) }
        />
        <Stack.Screen
          name="EpisodeDetails"
          component={EpisodeScreen}
          options={({route}) => ({ title: route.params.episode.name }) }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
