/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Mitos from '../../pages/Passo1/Mitos';
import Mitos2 from '../../pages/Passo1/Mitos2';
import Mitos3 from '../../pages/Passo1/Mitos3';
import Mitos4 from '../../pages/Passo1/Mitos4';

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
        <Text>Passo 1 - Mitos</Text>
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

const Mitorsroutes: React.FC = () => {
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
      <App.Screen name="Mitos" component={Mitos} />
      <App.Screen name="Mitos2" component={Mitos2} />
      <App.Screen name="Mitos3" component={Mitos3} />
      <App.Screen name="Mitos4" component={Mitos4} />
    </App.Navigator>
  );
};

export default Mitorsroutes;
