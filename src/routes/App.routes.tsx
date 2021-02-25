import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Dashboardroutes from './Dashboard/Dashboard.routes';
import Appcidadania from '../pages/Appcidadania';
import Appcidadania1 from '../pages/Appcidadania1';
import Appcidadania2 from '../pages/Appcidadania2';
import Passosroutes from './Passos/Passos.routes';

const App = createStackNavigator();

const Approutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,

        cardStyle: {backgroundColor: '#fff'},
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}>
      <App.Screen name="Welcome" component={Welcome} />
      <App.Screen name="Appcidadania" component={Appcidadania} />
      <App.Screen name="Appcidadania1" component={Appcidadania1} />
      <App.Screen name="Appcidadania2" component={Appcidadania2} />
      <App.Screen name="Dashboardroutes" component={Dashboardroutes} />
      <App.Screen name="Passosroutes" component={Passosroutes} />
    </App.Navigator>
  );
};

export default Approutes;
