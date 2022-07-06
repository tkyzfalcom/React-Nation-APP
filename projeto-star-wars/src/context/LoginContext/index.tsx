import React, { createContext, useState } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { post } from "../../services/api";

interface LoginContexto {
    title: string,
    body: string,
    userId: number,
    storeData: (post: post) => Promise<void>
    getData: () => Promise<void>
    setTitle: React.Dispatch<React.SetStateAction<string>>
}

export const LoginContext = createContext<LoginContexto>({
    title: "",
    body: "",
    userId: 0,
    storeData: ({ }) => undefined,
    getData: () => undefined,
    setTitle() { }
})

export const ProvedorLogin = ({ children }) => {

    const [title, setTitle] = useState<string>("")
    const [body, setBody] = useState<string>("")
    const [userId, setUserId] = useState<number>(0)



    const storeData = async (value: post) => {
        try {
            const jsonValue = JSON.stringify(value)
            setBody(value.body)
            setTitle(value.title)
            setUserId(value.userId)
            await AsyncStorage.setItem('@login', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@login')
            return jsonValue != null && JSON.parse(jsonValue);
        } catch (e) {
            // error reading value
        }
    }
    return (
        <LoginContext.Provider
            value={{
                title,
                body,
                userId,
                storeData,
                getData,
                setTitle
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}
