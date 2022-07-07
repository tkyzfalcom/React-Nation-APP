import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity, Modal, Image } from 'react-native';
import { Botao } from '../../components/Botao';
import { StarshipModal } from '../../components/modais/StarshipModal';
import { buscaStarships } from '../../services/api';
import { styles } from './styles';

import FadedLine from '../../assets/icons/faded-black-div-cut.png'

import Cr90 from    "../../assets/images/CR90Corvette.png"
import Imperial from "../../assets/images/Imperial.png"
import Millenium from '../../assets/images/TY-1300.png'
import Sentinel from "../../assets/images/Sentinel-class.png"
import DeathStar from "../../assets/images/DS-1Orbital.png"
import YWing from "../../assets/images/BTLY-wing.png"
import XWing from "../../assets/images/T-65.png"
import TwinIon from "../../assets/images/TwinIon.png"
import Executor from "../../assets/images/Executor.png"
import GR75 from "../../assets/images/GR-75.png"

import Slave1 from "../../assets/images/Firespray-31.png"
import ImperialShuttle from "../../assets/images/Lambda-class.png"
import EF76 from "../../assets/images/EF76Nebulon.png"
import Calamari from "../../assets/images/MC80Liberty.png"
import AWing from "../../assets/images/RZ-1.png"
import BWing from "../../assets/images/ASF-01.png"
import Republic from "../../assets/images/Consular.png"
import DroidControl from "../../assets/images/Lucrehulk.png"
import NabooFighter from "../../assets/images/N-1.png"
import NabooRoyal from "../../assets/images/J-type327.png"

import Scimitar from "../../assets/images/StarCourier.png"
import JType from "../../assets/images/J-typeDiplomatic.png"
import BotaJef from "../../assets/images/Botajef.png"
import JediStarFighter from "../../assets/images/Delta-7.png"
import HType from "../../assets/images/H-typeNuvian.png"
import RepublicAssault from "../../assets/images/Acclamator.png"
import SolarSailer from "../../assets/images/Punworcca.png"
import Providence from "../../assets/images/Providence.png"
import Theta from "../../assets/images/Theta-clas.png"
import SenatorClass from "../../assets/images/Senator.png"

import NabooStar from "../../assets/images/J-typeStar.png"
import JediInterceptor from "../../assets/images/Eta-2.png"
import Arc170 from "../../assets/images/AgressiveReconnaissance.png"
import Banking from "../../assets/images/Minificent.png"
import Belbullab from "../../assets/images/Belbulbab-22.png"
import VWing from "../../assets/images/Alpha-3.png"



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
    url: string,
    imagem?,
}


export interface ListStarships {
    name: string,
    url: string,
    cost_in_credits?: string,
}

export const LojaNaves = () => {

    const [starShipList, setStarShipList] = useState<starship[]>([]);
    const [page, setPage] = useState<string>("?page=1");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);
    const [listaImagem, setListaImagem] = useState([Cr90, Imperial, Sentinel,DeathStar,Millenium,YWing,XWing,TwinIon,Executor,GR75])
    const [listaImagem2, setListaImagem2] = useState([Slave1, ImperialShuttle, EF76,Calamari,AWing,BWing,Republic,DroidControl,NabooFighter,NabooRoyal])
    const [listaImagem3, setListaImagem3] = useState([Scimitar,JType,BotaJef,JediStarFighter,HType,RepublicAssault,SolarSailer,Providence,Theta,SenatorClass])
    const [listaImagem4, setListaImagem4] = useState([NabooStar,JediInterceptor,Arc170,Banking,Belbullab,VWing])
    const [imagem, setImagem] = useState()
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
            url: "",
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
            <View style={styles.titleContainer}><Text style={styles.title}>
                Loja de Naves
            </Text></View>

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
                                <View style={styles.cardContainer}>
                                    <Text style={styles.cardTitle}>{item.model}</Text>
                                    {page === '?page=1' &&
                                        <Image source={listaImagem[index]} style={{ width: 180, height: 180 }} />}
                                    {page === '?page=2' &&
                                        <Image source={listaImagem2[index]} style={{ width: 180, height: 180 }} />}
                                    {page === '?page=3' &&
                                        <Image source={listaImagem3[index]} style={{ width: 180, height: 180 }} />}
                                    {page === '?page=4' &&
                                        <Image source={listaImagem4[index]} style={{ width: 180, height: 180 }} />}
                                    <TouchableOpacity
                                        onPress={() => {
                                            setModal(true)
                                            setStarshipItem(item)
                                        }}
                                        style={styles.cardButton}
                                    >
                                       <Text style={{color:"white"}}>Saiba mais</Text>
                                    </TouchableOpacity>
                                    <Image source={FadedLine} style={styles.line}/>
                                </View>
                            </>
                        )}
                    />
                    <StarshipModal item={starshipItem} modal={modal} setModal={setModal} indexStarShips={''} />
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