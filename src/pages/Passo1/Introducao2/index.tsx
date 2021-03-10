/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Progresbar,
  Title,
  TitleOpacity,
  ContainerImage,
  Subtitle,
  Paragraph,
} from './styles';

import Barprogress from '../../../assets/progressbar2.png';
import {GoBack, GoBackIcon, Text} from '../styles';

const Introducao2: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerImage>
        <Progresbar source={Barprogress} />

        <Subtitle>Deixa eu te contar um segredo</Subtitle>
        <Paragraph>
          Muita gente toma a decisão certeira de iniciar sua jornada rumo ao
          reconhecimento, porém, por não conhecerem profundamente os
          procedimentos, ficam completamente perdidos, pulam etapas, esquecem de
          completar outras, e lá na frente, vê que “instalou as janelas antes de
          levantar as paredes”, com isso, perdem tempo e dinheiro, ou caem nas
          mãos de agentes mal-intencionados que se apresentam quase como mágicos
          do reconhecimento da cidadania.
        </Paragraph>
        <TitleOpacity>Próximo</TitleOpacity>

        <GoBack
          onPress={() => {
            navigation.navigate('Introducao3');
          }}>
          <Text>Já ouviu falar em cidadania Miojo?</Text>
          <GoBackIcon name="chevron-right" size={25} color="#db822b" />
        </GoBack>
      </ContainerImage>
    </Container>
  );
};

export default Introducao2;
