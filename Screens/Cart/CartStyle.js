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
  textbox: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,
    borderRadius: 10,
    shadowOpacity: 80,
    elevation: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  textboxtext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  orderdetail: {
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#307ecc',
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
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
  categoryTextSelected: {
    color: '#307ecc',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: '#307ecc',
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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
  noItemText: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default style;