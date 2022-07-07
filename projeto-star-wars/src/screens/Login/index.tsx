import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LoginContext } from '../../context/LoginContext';
import {  post, postLogin } from '../../services/api';



export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const storeData = useContext(LoginContext).storeData
    var title = useContext(LoginContext).title
    const setTitle=useContext(LoginContext).setTitle



    useEffect(()=>{
    },[title])
    const postar = () => {
        let login: post = {
            title: username,
            body: password,
            userId: 1
        }
        postLogin(login).then((res) => {
            storeData(login)
            setTitle(res.data.title)
        }
        ).catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <View>
            {title ?
            <View>
                <Text style={{padding:50}}>Bem vindo padawan</Text>
            
            <TextInput
                onChangeText={(text) => setUsername(text)}
                placeholder={("Username")}
                value={username}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder={("Password")}
                value={password}
            />
            <TouchableOpacity
                onPress={() => postar()}
            >
                <Text>Insira um botão aqui</Text>
            </TouchableOpacity>
            </View>
            :
            <View>
            <TextInput
            onChangeText={(text) => setUsername(text)}
            placeholder={("Username")}
            value={username}
        />
        <TextInput
            onChangeText={(text) => setPassword(text)}
            placeholder={("Password")}
            value={password}
        />
        <TouchableOpacity
            onPress={() => postar()}
        >
            <Text>Insira um botão aqui</Text>
        </TouchableOpacity>
        </View>
}
            </View>

    )
}
