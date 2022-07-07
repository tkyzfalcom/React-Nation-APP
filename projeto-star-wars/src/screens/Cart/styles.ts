import { StyleSheet } from "react-native"

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#181818',

    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize:20
    },
    item:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        backgroundColor: '#5e0017',
        paddingHorizontal: 30,
        paddingTop: 60,
    },
    container2: {
        paddingHorizontal: 30,
        paddingTop: 10,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    container3: {
        paddingTop: 50
    }

})
