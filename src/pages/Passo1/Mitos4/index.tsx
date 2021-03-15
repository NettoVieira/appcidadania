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
  ButtonContinua,
  ButtonText,
} from './styles';

import Barprogress from '../../../assets/progressbar-mito4.png';
import {GoBack, GoBackIcon, Text} from '../styles';

const Mitos4: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerImage>
        <Progresbar source={Barprogress} />
        <TitleOpacity>Cidadania Italiana</TitleOpacity>
        <Title>Principais mitos</Title>
        <Subtitle>
          Quem tem mulher na linha de transmissão não tem direito ao
          reconhecimento:
        </Subtitle>
        <Paragraph>
          Gente, mas isso a muito tempo atrás né? Hoje em dia, filhos de
          mulheres nascidas antes de 1948 tem o seu direito assegurado através
          de um processo civil ajuizado em Roma, que por sinal já está bastante
          consolidado. Se este é o seu caso, fique tranquilo, você precisará
          apenas assinar uma procuração para que um advogado italiano te
          represente lá. Este passo está bem especificado no APP. Pode seguir
          normalmente, que no momento certo cuidarei de você.
        </Paragraph>

        <ButtonContinua
          onPress={() => {
            navigation.navigate('Passosroutes');
          }}>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </ContainerImage>
    </Container>
  );
};

export default Mitos4;
