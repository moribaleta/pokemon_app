import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  loginContainer: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    gap: 12,
  },
  loginTitle: {
    fontSize: 18,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  textInput: {
    backgroundColor: 'darkgrey',
    width: '100%',
    height: 40,
    borderRadius: 12,
    paddingHorizontal: 12,
    color: 'white',
  },
});

export default styles;
