import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Home = ({navigation}) => {
    return <View>
        <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
            <Text>Home</Text> 
        </TouchableOpacity>
    </View>
}