import React, { useState } from "react";
import { Modal, ModalProps, Text, TouchableOpacity, View } from 'react-native';
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { starship } from "../../../screens/LojaNaves";

interface modalProps extends ModalProps {
    item: starship,
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const StarshipModal = ({item, modal, setModal, ...rest}:modalProps) => {

    return <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
            setModal(false)
        }}
    >
        <TouchableOpacity onPress={() => setModal(false)}>
            <View style={{ backgroundColor: 'red', height: 200, width: '100%' }}>
                <Text style={{ color: 'white' }}>Modelo: {item.model}</Text>
                <Text style={{ color: 'white' }}>Créditos: {item.cost_in_credits}</Text>
                <Text style={{ color: 'white' }}>Fabricante: {item.manufacturer}</Text>
                <Text style={{ color: 'white' }}>Capacidade de Passageiros: {item.passengers}</Text>
                <Text style={{ color: 'white' }}>Classificação de HyperDrive: {item.hyperdrive_rating}</Text>
                <Text style={{ color: 'white' }}>Capacidade de Tripulação: {item.crew}</Text>
            </View>
        </TouchableOpacity>
    </Modal>



}