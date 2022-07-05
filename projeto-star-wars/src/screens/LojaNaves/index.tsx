import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity, Modal } from 'react-native';
import { Botao } from '../../components/Botao';
import { StarshipModal } from '../../components/modais/StarshipModal';
import { buscaStarships } from '../../services/api';
import { styles } from './styles';

export interface starship {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    cargo_capacity: string,
    consumables: string,
    hyperdrive_rating: string,
    MGLT: string,
    starship_class: string,
    pilots: [],
    films: [],
    created: string,
    edited: string,
    url: string
}

export const LojaNaves = () => {

    const [starShipList, setStarShipList] = useState<starship[]>([]);
    const [page, setPage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [starshipItem, setStarshipItem] = useState<starship>(
        {
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
            url: ""
        }
    );

    useEffect(() => {
        setLoading(true);
        buscaStarships(page).then((res) => {
            setStarShipList(res.data.results);

        }).catch((err) => {
            console.log(err)
        }).finally(() => setLoading(false))
    }, [page]);
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Loja de Naves
            </Text>

            {loading ?
                <Text style={styles.cardTitle}>
                    Carregando...
                </Text>
                :
                <>
                    <FlatList
                        data={starShipList}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal(true)
                                            setStarshipItem(item)
                                        }}
                                        style={styles.cardButton}
                                    >
                                        <Text style={styles.cardTitle}>Modelo: {item.model}</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    />
                    <StarshipModal item={starshipItem} modal={modal} setModal={setModal} />
                </>
            }

            <View style={styles.buttons}>
                <Botao titulo={'1'} corTexto={'#a5a9a8'} onPress={() => setPage("?page=1")}></Botao>
                <Botao titulo={'2'} corTexto={'#a5a9a8'} onPress={() => setPage('?page=2')}></Botao>
                <Botao titulo={'3'} corTexto={'#a5a9a8'} onPress={() => setPage("?page=3")}></Botao>
                <Botao titulo={'4'} corTexto={'#a5a9a8'} onPress={() => setPage('?page=4')}></Botao>
            </View>

        </View>
    )
}