import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={{backgroundColor: '#fff'}} />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
