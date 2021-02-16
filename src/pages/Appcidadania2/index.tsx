/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {useNavigation} from '@react-navigation/native';

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
} from './styles';

const Appcidadania: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Img source={lupaImg} />
        <Title>Entendendo a Cidadania Italiana</Title>
        <Texto>
          Ciao <Name>Netto Vieira</Name> parabéns pela decisão! Explicaremos o
          que você precisa saber para dar o primeiro passo e se tornar um
          cidadão italiano.
        </Texto>
        <Marcador>
          <MarcadorText1>.</MarcadorText1>
          <MarcadorText2>.</MarcadorText2>
          <MarcadorText3>.</MarcadorText3>
        </Marcador>
      </Container>
      <ButtonContinue
        onPress={() => {
          navigation.navigate('Passoroutes');
        }}>
        <ButtonContinueText>Começar agora</ButtonContinueText>
      </ButtonContinue>
    </>
  );
};

export default Appcidadania;
