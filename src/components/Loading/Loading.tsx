import React from 'react';
import { StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Loading = () => (
  <ActivityIndicator style={styles.root} animating={true} />
);

export default Loading;

const styles = StyleSheet.create({
  root: {
    marginTop: 16,
  },
});
