import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';

const App = createStackNavigator();

const Approutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
        headerTitle: '',
        cardStyle: {backgroundColor: '#fff'},
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}>
      <App.Screen name="Welcome" component={Welcome} />
    </App.Navigator>
  );
};

export default Approutes;
