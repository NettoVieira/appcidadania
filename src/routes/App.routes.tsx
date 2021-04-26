import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Dashboardroutes from './Dashboard/Dashboard.routes';
import Appcidadania from '../pages/Appcidadania';
import Appcidadania1 from '../pages/Appcidadania1';
import Appcidadania2 from '../pages/Appcidadania2';
import Passosroutes from './Passos/Passos.routes';
import Introducao from './Introducao/Introducao.routes';
import Mitos from './Mitos/Mitos.routes';
import Passos2routes from './Passos2/Passos.routes';
import Passos3routes, {Headerleft, Headerright} from './Passos3/Passos.routes';
import Emissoes from '../pages/Passo3/Emissoes';

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
      <App.Screen name="Introducao" component={Introducao} />
      <App.Screen name="Mitos" component={Mitos} />
      <App.Screen name="Passos2routes" component={Passos2routes} />
      <App.Screen name="Passos3routes" component={Passos3routes} />
      <App.Screen
        name="Emissoes"
        component={Emissoes}
        options={{
          headerShown: true,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => {
            return <Headerleft />;
          },
          headerRight: () => {
            return <Headerright />;
          },
        }}
      />
    </App.Navigator>
  );
};

export default Approutes;
