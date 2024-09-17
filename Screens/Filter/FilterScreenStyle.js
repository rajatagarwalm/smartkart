import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 0.5,
    },
    checkItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        paddingBottom: 10,
        color: 'black',
    },
    label: {
        margin: 8,
        fontSize: 18,
    },
})

export default styles;