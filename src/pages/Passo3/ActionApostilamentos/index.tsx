/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  ContainerBody,
  Paragraph,
  ContainerFooter,
  Subtitle,
  TitleParagraph,
  ButtonContinua,
  ButtonText,
} from './styles';
import Banner from '../../../Components/Banner';

const ActionRetificacao: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ContainerBody>
          <Subtitle>Meus documentos</Subtitle>
          <Title>Apostilamentos</Title>

          <TitleParagraph>Subtítulo e breve descrição</TitleParagraph>
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
              navigation.navigate('Emissoes');
            }}>
            <ButtonText>Começar agora - emissões</ButtonText>
          </ButtonContinua>
        </ContainerFooter>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
  );
};

export default ActionRetificacao;
