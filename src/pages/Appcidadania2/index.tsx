/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
import React, {useCallback, useState} from 'react';

import {useFocusEffect, useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import lupaImg from '../../assets/lupa.png';
import {
  Container,
  Title,
  Img,
  Texto,
  Marcador,
  MarcadorText1,
  MarcadorText2,
  MarcadorText3,
  ButtonContinue,
  ButtonContinueText,
  Name,
  ContainerText,
} from './styles';

interface Usuario extends Object {
  Name: string;
}

const Appcidadania: React.FC = () => {
  const navigation = useNavigation();
  const [view, setView] = useState<Usuario>();

  useFocusEffect(
    useCallback(() => {
      async function getItem() {
        const [response] = await AsyncStorage.multiGet([
          '@appcidadania:response',
        ]);

        const Response = JSON.parse(response[1] || '{}');

        setView(Response.User);
      }

      getItem();
    }, []),
  );

  return (
    <>
      <Container>
        <Img source={lupaImg} />
        <ContainerText>
          <Title>Entendendo a Cidadania Italiana</Title>
          <Texto>
            Ciao <Name>{view?.Name}</Name> parabéns pela decisão! Explicaremos o
            que você precisa saber para dar o primeiro passo e se tornar um
            cidadão italiano.
          </Texto>
          <Marcador>
            <MarcadorText1>.</MarcadorText1>
            <MarcadorText2>.</MarcadorText2>
            <MarcadorText3>.</MarcadorText3>
          </Marcador>
        </ContainerText>
      </Container>
      <ButtonContinue
        onPress={() => {
          navigation.navigate('Dashboardroutes');
        }}>
        <ButtonContinueText>Começar agora</ButtonContinueText>
      </ButtonContinue>
    </>
  );
};

export default Appcidadania;
