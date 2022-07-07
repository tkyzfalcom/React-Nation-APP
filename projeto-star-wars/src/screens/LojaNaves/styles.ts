import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',

    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    cardButton: {
        padding: 10,
        backgroundColor: '#5e0017',
        borderRadius: 25,
        marginVertical: 10
    },
    cardContainer: {
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 5,
    },
    buttons: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    line: {
        tintColor: '#6a6e6f',
        width: 300,
        height: 8
    },
    titleContainer: {
        backgroundColor: '#5e0017',
        paddingHorizontal: 30,
        paddingTop: 60,
    }
})