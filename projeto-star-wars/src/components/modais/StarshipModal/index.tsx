import React from "react";
import {Modal, ModalProps, Text} from 'react-native';
import { starShipList } from "../../../screens/LojaNaves";

interface modalProps extends ModalProps {
    item: starShipList,
    modal:boolean,
    preco?: number
}

export const StarshipModal = (item, modal, preco?)=>{
    
    return (
    <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
            false;
        }}
        //{...rest}
    >
        <Text style={{color:'white'}}>{item.name}</Text>
    </Modal>

    
    )
}