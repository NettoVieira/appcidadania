/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Aposentar from '../../../assets/icon-aposentadoria.png';

import {
  Container,
  Title,
  ContainerHeader,
  ContainerBody,
  Image,
  Paragraph,
  ContainerFooter,
  ButtonContinua,
  ButtonText,
} from './styles';

const Aposentadoria: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerHeader>
        <Image source={Aposentar} />
      </ContainerHeader>
      <ContainerBody>
        <Title>Pendurar as chuteiras</Title>
        <Paragraph>
          Aposentar-se no país europeu que escolher, também é uma opção para
          qualquer cidadão italiano, sem a necessidade de qualquer outro motivo
          além do fato de que é o que você deseja.
        </Paragraph>
      </ContainerBody>
      <ContainerFooter>
        <ButtonContinua
          onPress={() => {
            navigation.navigate('Passo 1');
          }}>
          <ButtonText>Entendi</ButtonText>
        </ButtonContinua>
      </ContainerFooter>
    </Container>
  );
};

export default Aposentadoria;
