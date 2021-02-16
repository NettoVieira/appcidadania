/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import conjuntoImg from '../../assets/conjunto.png';
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
} from './styles';

const Appcidadania: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Img source={conjuntoImg} />
        <Title>Cidadania Italiana em um único lugar</Title>
        <Texto>
          Todos os passos e ferramentas específicas para facilitar o
          reconhecimento da sua cidadania italiana.
        </Texto>
        <Marcador>
          <MarcadorText1>.</MarcadorText1>
          <MarcadorText2>.</MarcadorText2>
          <MarcadorText3>.</MarcadorText3>
        </Marcador>
      </Container>
      <ButtonContinue
        onPress={() => {
          navigation.navigate('Appcidadania1');
        }}>
        <ButtonContinueText>Próximo</ButtonContinueText>
      </ButtonContinue>
    </>
  );
};

export default Appcidadania;
