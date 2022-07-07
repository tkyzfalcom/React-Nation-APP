import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#12100055'
    },
    modalContainer: {
        backgroundColor: '#222222',
        borderRadius: 15,
        borderColor: '#5e0017',
        borderWidth: 3,
        padding: "5%",
        alignItems: "flex-start",
        width: "80%",
        maxHeight: "80%",
        
    },
    closeIcon: {
        tintColor: '#fff',
        height: 25,
        width: 25,
        marginLeft: 10
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        width: "90%",
    },
    text: {
        color: '#a5a9a8',
        marginVertical: 2,
        marginHorizontal: 10
    },
    textContainer: {
        borderLeftColor: '#fff',
        borderLeftWidth: 2
    }
})