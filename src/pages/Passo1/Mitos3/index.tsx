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

import Barprogress from '../../../assets/progressbar-mito3.png';
import {GoBack, GoBackIcon, Text} from '../styles';
import Banner from '../../../Components/Banner';

const Mitos3: React.FC = () => {
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
        <TitleOpacity>Próximo</TitleOpacity>

        <GoBack
          onPress={() => {
            navigation.navigate('Mitos4');
          }}>
          <Text>O processo leva 3 anos?</Text>
          <GoBackIcon name="chevron-right" size={25} color="#db822b" />
        </GoBack>
      </ContainerImage>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </Container>
  );
};

export default Mitos3;
