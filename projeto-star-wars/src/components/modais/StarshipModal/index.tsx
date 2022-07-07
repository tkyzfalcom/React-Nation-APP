import React, { useState, useContext, useEffect } from "react";
import { Modal, ModalProps, Text, TouchableOpacity, View, Image } from 'react-native';
import { Item } from "react-native-paper/lib/typescript/components/List/List";
import { ListStarships, starship } from "../../../screens/LojaNaves";
import { styles } from "./styles";
import IconeFechar from "../../../assets/icons/close_FILL0_wght400_GRAD0_opsz48.png";
import { Botao } from "../../Botao"
import { ContextCart } from "../../../context/CartContext"
import { buscaStarshipIndex } from "../../../services/api";


interface modalProps extends ModalProps {
    item: starship,
    modal: boolean,
    indexStarShips: string,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    valor?: string,
    cart?: boolean
}

export const StarshipModal = ({item, modal, setModal, indexStarShips ,valor, cart, ...rest}:modalProps) => {

    const [reload, setReload] = useState<boolean>(false);
    const [processing, setProcessing] = useState<boolean>(true);
    const [itemStarShipsDet, setItemStarShips] = useState<starship>({
        name: "",
        model: "",
        manufacturer: "",
        cost_in_credits: "",
        length: "",
        max_atmosphering_speed: "",
        crew: "",
        passengers: "",
        cargo_capacity: "",
        consumables: "",
        hyperdrive_rating: "",
        MGLT: "",
        starship_class: "",
        pilots: [],
        films: [],
        created: "",
        edited: "",
        url: "",
    })

    const addItemCart = useContext(ContextCart).addCart;
    const removeItemCart = useContext(ContextCart).removeCart;

    const starShipCart: ListStarships = {
        name: itemStarShipsDet.name,
        url: itemStarShipsDet.url,
        valor: itemStarShipsDet.cost_in_credits,
    };

    useEffect(() => {
        setProcessing(true);
        buscaStarshipIndex(indexStarShips).then((res) => {
            setItemStarShips(res.data);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setProcessing(false);
        })
    }, [reload, indexStarShips]);



    function handleButtonCart (){
        if(cart) {
            removeItemCart(starShipCart.name);
            setModal(false);
        } else {
            addItemCart(starShipCart);
            setModal(true);
        }
        
    }

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
                    <View>
                    <Botao titulo={cart ? "Remover" : "Adicionar"} onPress={() => { handleButtonCart(); } } corTexto={"black"} />
                    </View>
                </View>
            </View>
        </View>
    </Modal>



}