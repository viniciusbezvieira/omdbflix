import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import RootNavigation from './navigation/RootNavigation';

function App(): JSX.Element {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('rgba(0,0,0,0)');
      StatusBar.setTranslucent(false);
    }
  }, [scheme, isDarkMode]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
