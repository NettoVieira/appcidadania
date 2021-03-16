/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Coracao from '../../../assets/coracao.png';

import {
  Container,
  Title,
  ContainerHeader,
  ContainerBody,
  Image,
  Paragraph,
  ContainerFooter,
  TitleOpacity,
  GoBack,
  Text,
  GoBackIcon,
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
        <Subtitle>
          Sei que tenho, mas não sei onde estão os documentos.
        </Subtitle>
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
      <ContainerFooter />
    </Container>
  );
};

export default Direito;
