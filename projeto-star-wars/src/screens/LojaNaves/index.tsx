import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Linking, TouchableOpacity } from 'react-native';
import { Botao } from '../../components/Botao';
import { StarshipModal } from '../../components/modais/StarshipModal';
import { buscaStarships } from '../../services/api';
import { styles } from './styles';


export interface starShipList{
    name: string, 
    model: string, 
    manufacturer: string, 
    cost_in_credits: string, 
    length: string, 
    max_atmosphering_speed: string, 
    crew: string, 
    passengers: string, 
    cargo_capacity: string, 
    consumables:string, 
    hyperdrive_rating: string, 
    MGLT: string, 
    starship_class: string, 
    pilots: [], 
    films: [], 
    created: string, 
    edited: string, 
    url: string
}

export const LojaNaves = ()=>{
    
    const [starShipList, setStarShipList] = useState<starShipList[]>([]);
    const[page, setPage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [modal, setModal] = useState<boolean>(false);



    useEffect(() => {
        setLoading(true);
        buscaStarships(page).then((res) => {
        setStarShipList(res.data.results);
       
        }).catch(() => {
            console.log("Erro")
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
                <FlatList
                    data={starShipList}
                    showsVerticalScrollIndicator={false}
                    
                    renderItem={({ item, index }) => (
                        <>
                        <View>
                            <TouchableOpacity
                            onPress={()=> setModal(true)}
                            >
                            <Text style={styles.cardTitle}>Nave: {item.name}</Text>
                           <Text style={styles.text}>Modelo: {item.model}</Text> 
                                                       
                          </TouchableOpacity>
                           
                          <StarshipModal item={item} modal={true} />
                       </View>
                       
                       
                       
                      </>
                    )
                    
                    }
                />
                
            }
            
            <View style={styles.buttons}>
            <Botao titulo={'1'} corFundo={'white'} corTexto={'black'} onPress={()=> setPage("?page=1")}></Botao>
            <Botao titulo={'2'} corFundo={'white'} corTexto={'black'} onPress={()=> setPage('?page=2')}></Botao>
            <Botao titulo={'3'} corFundo={'white'} corTexto={'black'} onPress={()=> setPage("?page=3")}></Botao>
            <Botao titulo={'4'} corFundo={'white'} corTexto={'black'} onPress={()=> setPage('?page=4')}></Botao>
            </View>
            
        </View>
    )
}