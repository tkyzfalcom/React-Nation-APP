import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import planeta from "../../assets/images/planeta.png"
import bolado from "../../assets/images/bolado.png"
import fundo from "../../assets/images/fundo.png"

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


import { styles } from './styles';
import { LoginContext } from '../../context/LoginContext';



export const Home = ({ navigation }) => {
    var title = useContext(LoginContext).title
    const [listaImagem, setListaImagem] = useState([Cr90, Imperial, Sentinel,DeathStar,Millenium,YWing,XWing,TwinIon,Executor,
        GR75,Slave1, ImperialShuttle, EF76,Calamari,AWing,BWing,Republic,
        DroidControl,NabooFighter,NabooRoyal,Scimitar,JType,BotaJef,JediStarFighter,HType
        ,RepublicAssault,SolarSailer,Providence,Theta,SenatorClass,NabooStar,JediInterceptor,Arc170,Banking,Belbullab,VWing])
    const [index,setIndex]=useState<number>(Math.floor(Math.random()*30))
    return <View>
      

        <View style={styles.container}>

            <ImageBackground source={fundo} style={styles.imagefundo}>

                <ScrollView>
                    <View style={styles.boxnav}>
                        <View style={styles.containeBoasVindas}>
                            <Text style={styles.texto}>SEJA BEM VINDO A MELHOR LOJA DA GALÁXIA</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>

                            <View style={styles.boxnav2}>
                                <Image source={{ uri: "https://static.wikia.nocookie.net/starwars/images/d/da/Hondo_Ohnaka_pirate_symbol.png/revision/latest/scale-to-width-down/1200?cb=20151105050113" }}
                                    style={styles.logo} resizeMode='stretch' />
                                <View style={styles.boxnav3}>

                                    <Text style={styles.login}>LOGIN</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>
                    <View style={styles.boxpromo}>

                        <View style={styles.box2promo}>

                            <Text style={styles.textpromo}>
                            Estamos há anos ‘LUZ’ obtendo naves, e oferecendo-as com o melhor preço do mercado.
                            </Text>

                            <Text style={styles.text2promo}>
                            * Desconto de 50% se você encontrar sua nave.
                            </Text>

                        </View>

                    </View>

                    <View style={{ height: 600, width: "100%" }}>
                        <View>
                        <Image source={listaImagem[index]}/>
                        



                        </View>
                    </View>


                    <View>

                        <View>

                            <Text style={styles.fundador}>
                                Nosso Fundador:
                            </Text>

                        </View>

                        <View style={styles.boximagens}>
                            {title?
                            <Image source={{ uri: "https://static.wikia.nocookie.net/starwars/images/b/b8/HondoOhnaka-TGTB.png/revision/latest/scale-to-width-down/350?cb=20211204222326" }} style={styles.hondo} />
                            :
                            <Image source={bolado} style={styles.hondo}/>
                            }
                            <Text style={styles.hondonome}>Hondo Ohnaka</Text>


                        </View>
                        <Text style={styles.textoinformativo}>   Sou o famoso Hondo Ohnaka, CEO da totalmente legalizada Ohnaka Transportes e Soluções®. Poderia lhe contar diversas histórias sobre meus grandes feitos, muitas até seriam verdade. Nestes tempos difíceis sobre o regime imperial, trago a primeira loja virtual onde você, trabalhador honesto, possa comprar sua primeira nave 0-parsecs. Tudo de forma legal e regularizada!

Caso sua entrega não ocorra dentro do prazo, sugiro que espere mais alguns meses pois eu lhe garanto que receberá sua encomenda!</Text>

                    </View>

                    <View>
                        <View style={styles.boximagens}>
                            <Image source={planeta} style={styles.hondo} />
                        </View>
                        <Text style={styles.textoinformativo}>          Florrum era um planeta desértico com uma grande quantidade de enxofre, localizado no sistema Florrum, dentro do setor Sertar da galáxia, nos Territórios da Orla Exterior. Durante as Guerras Clônicas, foi a localização de uma gangue pirata liderada por Hondo Ohnaka. Florrum foi governada por um curto tempo pela Confederação dos Sistemas Independentes, antes do General Grievous ser derrotado pelo lider pirata.
                        </Text>
                    </View>

                </ScrollView>
            </ImageBackground>

        </View>


    </View>
}
