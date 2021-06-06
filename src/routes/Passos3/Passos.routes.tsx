/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import Passo3 from '../../pages/Passo3';
import Emissoes from '../../pages/Passo3/Emissoes';
import ActionEmissao from '../../pages/Passo3/ActionEmissao';
import ActionAnalise from '../../pages/Passo3/ActionAnalise';
import ActionRetificacao from '../../pages/Passo3/ActionRetificacao';
import ActionCNN from '../../pages/Passo3/ActionCNN';
import ActionTraducao from '../../pages/Passo3/ActionTraducao';
import ActionApostilamentos from '../../pages/Passo3/ActionApostilamentos';

import {
  Container,
  GoBack,
  GoBackIcon,
  ButtonHelp,
  ButtonHelpText,
  Text,
} from './styles';

const App = createStackNavigator();

export const Headerleft: React.FC = (a) => {
  const navigation = useNavigation();
  return (
    <Container>
      <GoBack
        onPress={() => {
          navigation.goBack();
        }}>
        <GoBackIcon name="chevron-left" size={35} color="#db822b" />
        <Text>Passo 3</Text>
      </GoBack>
    </Container>
  );
};

export const Headerright: React.FC = () => {
  return (
    <Container>
      <ButtonHelp>
        <ButtonHelpText>Quero Ajuda!</ButtonHelpText>
      </ButtonHelp>
    </Container>
  );
};

const Passos3routes: React.FC = () => {
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
      <App.Screen name="Passo3" component={Passo3} />
      <App.Screen name="Emissoes" component={Emissoes} />
      <App.Screen name="ActionEmissao" component={ActionEmissao} />
      <App.Screen name="ActionAnalise" component={ActionAnalise} />
      <App.Screen name="ActionRetificacao" component={ActionRetificacao} />
      <App.Screen name="ActionCNN" component={ActionCNN} />
      <App.Screen name="ActionTraducao" component={ActionTraducao} />
      <App.Screen
        name="ActionApostilamentos"
        component={ActionApostilamentos}
      />
    </App.Navigator>
  );
};

export default Passos3routes;
