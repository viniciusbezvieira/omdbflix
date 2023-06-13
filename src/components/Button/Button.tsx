import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default ({ props }) => <Button style={styles.root} {...props} />;

const styles = StyleSheet.create({
  root: {
    marginTop: 16,
  },
});
