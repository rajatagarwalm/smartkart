import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../Components/colors';

const width = Dimensions.get('window').width / 2 - 30;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    card: {
        textAlign: 'center',
        backgroundColor: '#fff',
        width: '100%',
        padding: 20,
        alignSelf: 'center',
        paddingBottom: 22,
        borderRadius: 10,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    textbox: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        shadowOpacity: 80,
        elevation: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    addresstext: {
        fontSize: 20,
        alignSelf: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontStyle: 'italic',
        paddingBottom: 10,
        color: 'black',
    },
});

export default style;