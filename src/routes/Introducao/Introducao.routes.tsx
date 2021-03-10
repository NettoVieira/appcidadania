/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Introducao from '../../pages/Passo1/Introducao';
import Introducao2 from '../../pages/Passo1/Introducao2';
import Introducao3 from '../../pages/Passo1/Introducao3';

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
        <Text>Passo 1 - Introdução</Text>
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

const Intruducaoroutes: React.FC = () => {
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
      <App.Screen name="Introducao" component={Introducao} />
      <App.Screen name="Introducao2" component={Introducao2} />
      <App.Screen name="Introducao3" component={Introducao3} />
    </App.Navigator>
  );
};

export default Intruducaoroutes;
