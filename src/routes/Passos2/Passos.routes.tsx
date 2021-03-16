/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Passo2 from '../../pages/Passo2';
import Direito from '../../pages/Passo2/Direito';

import {
  Container,
  GoBack,
  GoBackIcon,
  ButtonHelp,
  ButtonHelpText,
  Text,
} from './styles';

const App = createStackNavigator();

const Headerleft: React.FC = (a) => {
  const navigation = useNavigation();
  return (
    <Container>
      <GoBack
        onPress={() => {
          navigation.goBack();
        }}>
        <GoBackIcon name="chevron-left" size={35} color="#db822b" />
        <Text>Passo 2</Text>
      </GoBack>
    </Container>
  );
};

const Headerright: React.FC = () => {
  return (
    <Container>
      <ButtonHelp>
        <ButtonHelpText>Quero Ajuda!</ButtonHelpText>
      </ButtonHelp>
    </Container>
  );
};

const Passos2routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,

        headerLeft: () => {
          return (
            <Container>
              <Headerleft />
            </Container>
          );
        },
        headerRight: () => {
          return (
            <Container>
              <Headerright />
            </Container>
          );
        },
        headerTitle: '',
        cardStyle: {backgroundColor: '#fff'},
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}>
      <App.Screen name="Passo2" component={Passo2} />
      <App.Screen name="Direito" component={Direito} />
    </App.Navigator>
  );
};

export default Passos2routes;
