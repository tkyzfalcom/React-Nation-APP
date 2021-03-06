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
import { useFocusEffect } from '@react-navigation/native';



export const Home = ({ navigation }) => {
    var title = useContext(LoginContext).title
    const [listaImagem, setListaImagem] = useState([Cr90, Imperial, Sentinel,DeathStar,Millenium,YWing,XWing,TwinIon,Executor,
        GR75,Slave1, ImperialShuttle, EF76,Calamari,AWing,BWing,Republic,
        DroidControl,NabooFighter,NabooRoyal,Scimitar,JType,BotaJef,JediStarFighter,HType
        ,RepublicAssault,SolarSailer,Providence,Theta,SenatorClass,NabooStar,JediInterceptor,Arc170,Banking,Belbullab,VWing])
    const [index,setIndex]=useState<number>(Math.floor(Math.random()*30))
    
    useFocusEffect(
        React.useCallback(() => {
           setIndex(Math.floor(Math.random()*30));
        }, [])
      );
    useEffect(()=>{
    },[index])

    return <View style={styles.container}>
      

        <ImageBackground source={fundo} style={styles.imagefundo}>

            <View style={styles.boxnav}>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Image source={{ uri: "https://static.wikia.nocookie.net/starwars/images/d/da/Hondo_Ohnaka_pirate_symbol.png/revision/latest/scale-to-width-down/1200?cb=20151105050113" }}
                            style={styles.logo} resizeMode='stretch' />
                        
                        <Text style={styles.login}>Login</Text> 
                </TouchableOpacity>

                <View style={styles.containerBoasVindas}>
                    <Text style={styles.texto}>SEJA BEM VINDO</Text>
                    <Text style={styles.texto}>?? MELHOR LOJA DA GAL??XIA</Text>
                </View>

            </View>

            <ScrollView>

                <View style={styles.box2promo}>
                    <Text style={styles.textpromo}>
                        Estamos h?? anos ???LUZ??? obtendo naves, e oferecendo-as com o melhor pre??o do mercado.
                    </Text>

                    <Text style={styles.text2promo}>
                        * Desconto de 20% se a nave for sua
                    </Text>
                </View>
                    

                <View style={{ height: 450, width: "100%" }}>
                    <View style={styles.imageContainer} >
                        <Image source={listaImagem[index]} style={styles.image} />

                        <Text style={styles.textoinformativo}>
                            Se quiser saber mais, venha conferir nossa loja!
                        </Text>
                    </View>
                </View>


                    <View>

                        <View>

                            <Text style={styles.fundador}>
                                Conhe??a Nosso Fundador
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
                        <Text style={styles.textoinformativo}>Sou o famoso Hondo Ohnaka, CEO da totalmente legalizada Ohnaka Transportes e Solu????es??. Poderia lhe contar diversas hist??rias sobre meus grandes feitos, muitas at?? seriam verdade. Nestes tempos dif??ceis sobre o regime imperial, trago a primeira loja virtual onde voc??, trabalhador honesto, possa comprar sua primeira nave 0-parsecs. Tudo de forma legal e regularizada!
Caso sua entrega n??o ocorra dentro do prazo, sugiro que espere mais alguns meses pois eu lhe garanto que receber?? sua encomenda!</Text>

                    </View>

                    <View>
                        <Text style={styles.fundador}>
                            Onde Ficamos
                        </Text>
                        <View style={styles.boximagens}>
                            <Image source={planeta} style={styles.hondo} />
                        </View>
                        <Text style={styles.textoinformativo}>
                        Nosso centro de distribui????o fica no planeta Florrum, apenas mais um humilde planeta na Orla Exterior sem nada de interessante. ?? civilizado? Dependendo da sua defini????o de civilizado, sim. Apesar disso n??o venha. Nossa opera????o ?? de confian??a e voc?? comprador n??o precisa se preocupar com nada.
                        </Text>
                        <Text style={[styles.textoinformativo,{marginBottom: 50}]}>
                        Eu n??o estou brincando, n??o venha.
                        </Text>
                    </View>

                </ScrollView>
            </ImageBackground>

        </View>
}
