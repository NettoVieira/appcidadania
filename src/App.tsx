import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import Routes from './routes';

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Routes />
        </View>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
