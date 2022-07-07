import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LoginContext } from '../../context/LoginContext';
import { post, postLogin } from '../../services/api';
import { styles } from './styles';



export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const storeData = useContext(LoginContext).storeData
    var title = useContext(LoginContext).title
    const setTitle = useContext(LoginContext).setTitle


    const createButtonAlert = () =>
        Alert.alert('Logou', 'Você está cadastrado agora pirata!', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    useEffect(() => {
    }, [title])
    const postar = () => {
        let login: post = {
            title: username,
            body: password,
            userId: 1
        }
        postLogin(login).then((res) => {
            storeData(login)
            setTitle(res.data.title)
            createButtonAlert()
        }
        ).catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.textoPirata}>Venha fazer parte da Ohnaka Gang</Text>
                <Text style={styles.textoPirata}>Estamos precisando de piratas destemidos!
                </Text>
                <TextInput
                    onChangeText={(text) => setUsername(text)}
                    placeholder={("Username")}
                    placeholderTextColor={"gray"}
                    value={username}
                    style={styles.input}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholder={("Password")}
                    placeholderTextColor={"gray"}
                    value={password}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.botao} onPress={() => postar()}>
                    <Text style={styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}
