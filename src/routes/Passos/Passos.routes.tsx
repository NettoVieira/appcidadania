/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Passo1 from '../../pages/Passo1';
import Planob from '../../pages/Passo1/Planob';
import Oportunidade from '../../pages/Passo1/Oportunidade';
import Emprego from '../../pages/Passo1/Emprego';
import Ensino from '../../pages/Passo1/Ensino';
import Beneficios from '../../pages/Passo1/Beneficios';
import Facilidade from '../../pages/Passo1/Facilidade';
import Heranca from '../../pages/Passo1/Heranca';
import Aposentadoria from '../../pages/Passo1/Aposentadoria';

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
      <App.Screen name="Passo 1" component={Passo1} />
      <App.Screen name="Planob" component={Planob} />
      <App.Screen name="Oportunidade" component={Oportunidade} />
      <App.Screen name="Emprego" component={Emprego} />
      <App.Screen name="Ensino" component={Ensino} />
      <App.Screen name="Beneficios" component={Beneficios} />
      <App.Screen name="Facilidade" component={Facilidade} />
      <App.Screen name="Heranca" component={Heranca} />
      <App.Screen name="Aposentadoria" component={Aposentadoria} />
    </App.Navigator>
  );
};

export default Passosroutes;
