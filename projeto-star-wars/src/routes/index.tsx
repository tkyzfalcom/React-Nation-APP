import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LojaNaves } from '../screens/LojaNaves';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

import HomeIcon from "../assets/icons/home.png";
import LojaIcon from "../assets/icons/ship.png";
import CarrinhoIcon from "../assets/icons/credits.png"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Feed = () => {
    return(
    <Stack.Navigator>
                <Tab.Screen name="teste" component={Home} options={{headerShown: false}} />
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
            tabBarStyle: { backgroundColor: "#000", paddingVertical: 2 },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#a5a9a8',
        }}
        >
            <Tab.Screen name="Home" component={Feed} options={{tabBarIcon: ({color}) => (
                            <Image
                                resizeMode='contain'
                                style={{width: 30, tintColor: color }}
                                source={HomeIcon}
                            />
                        ),}} />
            <Tab.Screen name="Loja" component={LojaNaves} options={{tabBarIcon: ({color}) => (
                            <Image
                                resizeMode='contain'
                                style={{width: 30, tintColor: color }}
                                source={LojaIcon}
                            />
                        ),}}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}