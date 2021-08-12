/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ilustra from '../../assets/svg/conjunto_ilustra_o.svg';

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
  ContainerText,
} from './styles';

const Appcidadania: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Ilustra width={RFValue(390)} height={RFValue(400)} />

        <ContainerText>
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
        </ContainerText>
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
