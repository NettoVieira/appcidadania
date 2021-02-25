/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Passo1 from '../../pages/Passo1';
import {
  Container,
  GoBack,
  GoBackIcon,
  ButtonHelp,
  ButtonHelpText,
  Text,
} from './styles';

const App = createStackNavigator();

const Headerleft: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <GoBack
        onPress={() => {
          navigation.goBack();
        }}>
        <GoBackIcon name="chevron-left" size={35} color="#db822b" />
        <Text>Passo 1</Text>
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

const Passosroutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerLeft: () => (
          <Container>
            <Headerleft />
          </Container>
        ),
        headerRight: () => (
          <Container>
            <Headerright />
          </Container>
        ),
        headerTitle: '',
        cardStyle: {backgroundColor: '#fff'},
        // eslint-disable-next-line react/jsx-closing-bracket-location
      }}>
      <App.Screen name="Passo 1" component={Passo1} />
    </App.Navigator>
  );
};

export default Passosroutes;
