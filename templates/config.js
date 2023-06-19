module.exports = {
  template: {
    post_execute: '',
    items: [
      {
        name: '${fileName}.tsx',
        type: 'file',
        location: 'react-native/main.txt',
      },
      {
        name: 'styles.ts',
        type: 'file',
        location: 'react-native/styles.txt',
      },
      {
        name: 'index.ts',
        type: 'file',
        location: 'react-native/index.txt',
      },
      {
        name: 'types.ts',
        type: 'file',
        location: 'react-native/types.txt',
      },
      {
        name: 'hooks.ts',
        type: 'file',
        location: 'react-native/hooks.txt',
      },
    ],
  },
};
