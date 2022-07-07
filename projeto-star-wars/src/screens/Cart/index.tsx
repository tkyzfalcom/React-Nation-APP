import React, { useContext, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import { ContextCart } from "../../context/CartContext";
import { styles } from "./styles";
import { Botao } from "../../components/Botao";

export const Cart = () => {

    const listStarShip = useContext(ContextCart).listStarship;
    const valorTotal = useContext(ContextCart).valorTotal
    const removeItemCart = useContext(ContextCart).removeCart;
    const removeCartAll = useContext(ContextCart).removeCartAll;
   
    
    const createTwoButtonAlert = () =>
    Alert.alert('Pedido', 'Deseja Finalizar o Pedido', [
      {
        text: 'Cancel',
        onPress: () =>{},
        style: 'cancel',
      },
      { text: 'OK', onPress: () => removeCartAll("alan") },
    ]);
    

    return <View style={styles.container}>
        <Text style={styles.text}>
            Carrinho
        </Text>
        <FlatList
            data={listStarShip}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <View style={styles.item}>
                    <TouchableOpacity>
                        <Text style={{color:'white'}}>{item.name}</Text>
                        <Text style={{color:'white'}}>{item.cost_in_credits}</Text>

                    </TouchableOpacity>
                    <Botao titulo={"remover"} corTexto={"red"} onPress={() => {  removeItemCart(item.name) } }>
                       
                    </Botao>
                </View>
                
            )
            }
        />
            <Text style={styles.text}>
                Valor Total: {valorTotal}
            </Text>
         <TouchableOpacity  style={{alignItems:'center', marginBottom:20}}>
            
            <Botao titulo={"Finalizar Pedido"} corTexto={"yellow"} onPress={createTwoButtonAlert  }></Botao>
        </TouchableOpacity>
        
    </View>
}
