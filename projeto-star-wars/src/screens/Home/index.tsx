import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import planeta from "../../assets/images/planeta.png"

import { styles } from './styles';

const fundo = "../../assets/images/fundo.png"

export const Home = ({ navigation }) => {
    return <View>
      

        <View style={styles.container}>

            <ImageBackground source={require(fundo)} style={styles.imagefundo}>

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
                            Desconto de 50% se você encontrar sua nave.
                            </Text>

                        </View>

                    </View>

                    <View style={{ height: 600, width: "100%", backgroundColor: "red" }}>
                        <View>




                        </View>
                    </View>


                    <View>

                        <View>

                            <Text style={styles.fundador}>
                                Nosso Fundador:
                            </Text>

                        </View>

                        <View style={styles.boximagens}>

                            <Image source={{ uri: "https://static.wikia.nocookie.net/starwars/images/b/b8/HondoOhnaka-TGTB.png/revision/latest/scale-to-width-down/350?cb=20211204222326" }} style={styles.hondo} />

                            <Text style={styles.hondonome}>Hondo Ohnaka</Text>


                        </View>
                        <Text style={styles.textoinformativo}>      Foi um pirata macho Weequay nascido em Sriluur que liderava a Gangue Ohnaka no planeta de Florrum localizado nos Territórios da Orla Exterior. Durante as Guerras Clônicas, a gangue estava ativa e possuía uma intensa rivalidade com a Ordem do Osso Sangrento, uma organização, também pirata, liderada por Lassa Rhayme. Após a ascensão do Império Galáctico, sua gangue dissolveu-se. Hondo lançou-se à deriva como um pequeno pirata e contrabandista.</Text>

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
