import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../Components/colors';

const width = Dimensions.get('window').width / 2 - 30;
const height = Dimensions.get('window').height;

const style = StyleSheet.create({

  backbtn: {
    marginTop: 10,
  },
  backbtnText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  card: {
    height: 255,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginTop: 20,
    padding: 15,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white
  },
  header: {
    flexDirection: 'row',
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
  sortBtn: {
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: '#307ecc',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;