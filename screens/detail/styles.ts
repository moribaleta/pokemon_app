import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#75CA9B',
  },
  imageContainer: {
    width: '100%',
    height: 300,
  },
  detailContainer: {
    backgroundColor: 'white',
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    padding: 20,
    gap: 12,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  detail: {
    fontSize: 14,
  },
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
