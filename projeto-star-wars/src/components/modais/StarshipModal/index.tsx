import React, { useState } from "react";
import { Modal, ModalProps, Text, TouchableOpacity, View, Image } from 'react-native';
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { starship } from "../../../screens/LojaNaves";
import { styles } from "./styles";
import IconeFechar from "../../../assets/icons/close_FILL0_wght400_GRAD0_opsz48.png";

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
        <View style={styles.modal} >
            <View style={styles.modalContainer} >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {item.model}
                    </Text>
                    <TouchableOpacity onPress={() => setModal(false)}>
                        <Image source={IconeFechar} style={styles.closeIcon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Classe: {item.starship_class}</Text>
                    <Text style={styles.text}>Fabricante: {item.manufacturer}</Text>
                    <Text style={styles.text}>Comprimento: {item.length}</Text>
                    <Text style={styles.text}>Capacidade de Tripulação: {item.crew}</Text>
                    <Text style={styles.text}>Capacidade de Passageiros: {item.passengers}</Text>
                    <Text style={styles.text}>Capacidade de Carga: {item.cargo_capacity}</Text>
                    <Text style={styles.text}>Classificação de HyperDrive: {item.hyperdrive_rating}</Text>
                    <Text style={styles.text}>Créditos: {item.cost_in_credits}</Text>
                </View>
            </View>
        </View>
    </Modal>



}