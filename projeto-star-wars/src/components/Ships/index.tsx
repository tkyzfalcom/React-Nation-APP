import React, { useContext } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, Image } from "react-native";
import { styles } from "./styles";

import { ListStarships } from "../../screens/LojaNaves";
import { ContextCart } from "../../context/CartContext";

interface StarShipsProps extends TouchableOpacityProps {
    item: ListStarships,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    setIndexStarShips: React.Dispatch<React.SetStateAction<string>>,
    setValor?: React.Dispatch<React.SetStateAction<string>>,
    cart?: boolean
}

export const CartStarShips = ({item, setModal, setIndexStarShips, setValor, cart, ...rest}: StarShipsProps) => {

    function handleModal () {
        setModal(true);
        setValor && setValor(item.valor);
        setIndexStarShips(item.name)
    }

    const removeShipCart = useContext(ContextCart).removeCart;

    return <TouchableOpacity
        style={styles.button}
        onPress={()=> handleModal()}
        {...rest}
    >

        <Text style={styles.text}>
            {item.name}
        </Text>
        {cart && <TouchableOpacity onPress={()=>removeShipCart(item.name)}>
            </TouchableOpacity>}

            </TouchableOpacity>
}