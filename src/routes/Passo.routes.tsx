import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import Passo1 from '../pages/Passo1';

const App = createStackNavigator();

const Passoroutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor: '#fff'},
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}>
      <App.Screen name="Passo1" component={Passo1} />
    </App.Navigator>
  );
};

export default Passoroutes;
