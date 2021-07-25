/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Diario from '../../pages/Diario';
import Continuar from '../../pages/Diario/Continuar';

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
        <Text>Diário do cidadania</Text>
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

const Diarioroutes: React.FC = () => {
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
      <App.Screen name="Diario" component={Diario} />
      <App.Screen name="ContinuarDiario" component={Continuar} />
    </App.Navigator>
  );
};

export default Diarioroutes;
