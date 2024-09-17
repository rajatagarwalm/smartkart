import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../Components/colors';

const width = Dimensions.get('window').width / 2 - 30;

const style = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: COLORS.white
    },
    searchContainer: {
        height: 50,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: COLORS.dark,
    },
});

export default style;