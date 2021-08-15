/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {RFValue} from 'react-native-responsive-fontsize';
import Ilustra from '../../assets/svg/conjunto_ilustra_o2.svg';

import {
  Container,
  Title,
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
        <Ilustra width={RFValue(430)} height={RFValue(430)} />
        <ContainerText>
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
        </ContainerText>
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
