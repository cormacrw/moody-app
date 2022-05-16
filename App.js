import React from 'react';
import HomeScreen from './src/Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NewMoodScreen from './src/Screens/MoodNotesScreen';


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer theme={{colors: {background: 'white'}}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewMood" component={NewMoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
