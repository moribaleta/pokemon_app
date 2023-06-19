import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    height: 450,
    backgroundColor: 'white',
    marginBottom: 16,
    marginHorizontal: 12,
    padding: 10,
    borderRadius: 12,
    gap: 12,
  },
  image: {
    borderRadius: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  detailContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  detail: {
    fontSize: 14,
  },
});

export default styles;
