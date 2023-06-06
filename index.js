import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { default as Theme } from './src/shared/Theme';
import { name as appName } from './app.json';
import { PaperProvider } from 'react-native-paper';

export default function Main() {
  return (
    <PaperProvider theme={Theme.ThemeConfig()}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);