import React from "react";
import { StyleSheet,Platform } from "react-native";
export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#181818',
        paddingTop: 50,
        paddingHorizontal: 10,
    },
    input:{
        backgroundColor:'#212226',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
        marginLeft:15,
        marginRight:15
    },
    textoSecundario:{
        color:"#4d93ad",
        marginLeft:15,
        marginTop:10
    },
    botao:{
        backgroundColor:"#5e0017",
        marginTop:40,
        borderRadius:5,
        marginLeft:10,
        marginRight:10
    },
    textoBotao:{
        paddingTop:10,
        paddingBottom:10,
        textAlign:"center",
        color:"white",
        paddingVertical:10
    },
    textoPirata:{
        textAlign:"center",
        fontSize:24,
        color:"white"
    }
})