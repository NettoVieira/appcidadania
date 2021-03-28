/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Coracao from '../../../assets/coracao.png';

import {
  Container,
  Title,
  ContainerHeader,
  ContainerBody,
  Paragraph,
  ContainerFooter,
  TitleOpacity,
  ButtonContinua,
  ButtonText,
} from './styles';
import {Subtitle} from '../../Passo1/Planob/styles';

const Direito: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerHeader>
        <TitleOpacity>Cidadania italiana</TitleOpacity>
        <Title>Tenho direito?</Title>
      </ContainerHeader>
      <ContainerBody>
        <Subtitle>Não faço ideia, mas quero saber.</Subtitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          velit nisl. Pellentesque ornare sed urna a elementum. In condimentum
          ipsum sed malesuada placerat. Mauris at lorem feugiat, pharetra est
          vitae, efficitur nulla. Maecenas accumsan ullamcorper nulla vitae
          pellentesque. Proin cursus nisi nunc, nec convallis magna hendrerit
          quis. Duis bibendum odio ac pulvinar laoreet. Praesent euismod dolor
          ut ultricies pharetra.
        </Paragraph>
      </ContainerBody>
      <ContainerFooter>
        <ButtonContinua
          onPress={() => {
            navigation.navigate('Dashboardroutes');
          }}>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </ContainerFooter>
    </Container>
  );
};

export default Direito;
