import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LojaNaves } from '../screens/LojaNaves';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Feed = () => {
    return(
    <Stack.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
    )
}

export const Routes = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="LojaNaves" component={LojaNaves} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}