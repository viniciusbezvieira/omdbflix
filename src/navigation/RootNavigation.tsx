import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, TitleDetails } from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="TitleDetails"
        component={TitleDetails}
        options={() => ({
          title: '',
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
          statusBarHidden: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
