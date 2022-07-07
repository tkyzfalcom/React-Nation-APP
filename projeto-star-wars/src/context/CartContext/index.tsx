import React, { createContext, useEffect, useState } from "react";
import { ListStarships } from "../../screens/LojaNaves";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";


export interface TypeContextCart {
    listStarship?: ListStarships[],
/*     quantity: number, */
    valorTotal: number,
    addCart: (ship: ListStarships) => void;
    removeCart: (name: string) => void;
    removeCartAll:(name: string) => void;
    
}

export const ContextCart = createContext<TypeContextCart>({
    listStarship: [{
        name: "",
        url: "",
        cost_in_credits: "",
    }],
    addCart: (ship: ListStarships) => { },
/*     quantity: 0, */
    valorTotal: 0,
    removeCart: (name: string) => { },
    removeCartAll:(name: string) => {}

    

})

export const CartProvider = ({ children }) => {
    const [listStarship, setListStarship] = useState<ListStarships[]>([]);
/*     const [quantity, setQuantity] = useState<number>(0); */
    const [valorTotal, setValorTotal] = useState<number>(0);

    useEffect(() => {
        somaValorTotal();
    }, [listStarship]);

    useEffect(() => {
        getData().then((res) => {
            res && setListStarship(res);
        })
    }, []);

    const createButtonAlert = () =>
        Alert.alert('Finalizou', 'Pedido finalizado obrigado pela compra, a entrega chegará, talvez... quem sabe', [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);


    function somaValorTotal() {
        let somaTotal = 0
        listStarship.map((item) => {
            somaTotal = somaTotal + Number(item.cost_in_credits)
        });
        setValorTotal(somaTotal);
    };

    function addCart(item: ListStarships) {
        cartData([...listStarship, item])
        setListStarship([...listStarship, item])
    };

    function removeCart(name: string) {
        let newCart = listStarship.filter((ship) => {
            return ship.name !== name
        });
        setListStarship(newCart);
    };
    function removeCartAll(name: string) {
        let newCart = listStarship.filter((ship) => {
            return ship.name === name
        });
        setListStarship(newCart);
        createButtonAlert()
    };



    const cartData = async (value: ListStarships[]) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@shiplist', jsonValue)
        } catch (s) {

        }
    }

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@shiplist')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (s) {

        }
    }

    return (
        <ContextCart.Provider
            value={{
                listStarship,
                valorTotal,
                addCart,
                removeCart,
                removeCartAll
               

            }}
        >
            {children}
        </ContextCart.Provider>
    )
}