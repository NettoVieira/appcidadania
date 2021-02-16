/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ilustraImg from '../../assets/ilustra.png';
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
        <Img source={ilustraImg} />
        <Title>Organize todos os seus documentos</Title>
        <Texto>
          Um jeito fácil de organizar e ter sempre em mãos o controle do seu
          processo. Sem perder prazos e com todo o registro de histórico.
        </Texto>
        <Marcador>
          <MarcadorText1>.</MarcadorText1>
          <MarcadorText2>.</MarcadorText2>
          <MarcadorText3>.</MarcadorText3>
        </Marcador>
      </Container>
      <ButtonContinue
        onPress={() => {
          navigation.navigate('Appcidadania2');
        }}>
        <ButtonContinueText>Próximo</ButtonContinueText>
      </ButtonContinue>
    </>
  );
};

export default Appcidadania;
