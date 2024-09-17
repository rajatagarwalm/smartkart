import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

const styles = StyleSheet.create({
    profileContainer: {
        width,
        height,
        padding: 0,
        zIndex: 1
    },
    profileBackground: {
        width,
        height: height
    },
    imgCard: {
        top: height * 0.07
    },
    avatar: {
        width: thumbMeasure,
        height: thumbMeasure,
        borderRadius: 50,
        borderWidth: 0,
        alignSelf: 'center',
    },
    nameCard: {
        alignSelf: 'center',
        top: height * 0.115,
        alignItems: "center",
    },
    nameText: {
        fontFamily: 'montserrat-bold',
        fontWeight: '900',
        fontSize: 26,
        color: '#ffffff',
    },
    cityStateText: {
        alignSelf: 'center',
        marginTop: 5,
        fontFamily: 'montserrat-bold',
        lineHeight: 20,
        fontWeight: 'bold',
        fontSize: 16,
        opacity: .8,
        color: 'white'
    },
    textBox: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '90%',
        padding: 20,
        paddingBottom: 22,
        borderRadius: 10,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 10,
        marginBottom: 10,
        top: height * 0.16,
    },
    textBoxText: {
        fontWeight: "bold",
    },
    logOutBtn: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: '90%',
        padding: 20,
        paddingBottom: 22,
        borderRadius: 10,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 10,
        marginBottom: 30,
        top: height * 0.16,
    },
});

export default styles;