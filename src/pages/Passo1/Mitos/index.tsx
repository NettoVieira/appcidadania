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

import Barprogress from '../../../assets/progressbar-mitos1.png';
import {GoBack, GoBackIcon, Text} from '../styles';
import Banner from '../../../Components/Banner';

const Mitos: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerImage>
        <Progresbar source={Barprogress} />
        <TitleOpacity>Cidadania Italiana</TitleOpacity>
        <Title>Principais mitos</Title>
        <Subtitle>Cidadania italiana tem limite de geração?</Subtitle>
        <Paragraph>
          Eita! Ainda é mito viu! Até o momento a cidadania italiana não possui
          limite de geração e por isso não importa se é o seu bisa, seu trisa,
          ou qualquer outro ascendente, mesmo que muito distante, e seus pais ou
          avós não precisam ter o reconhecimento deles para que você corra atrás
          do seu, os direitos são completamente independentes. Ainda sim, melhor
          não dar mole, vai que...
        </Paragraph>
        <TitleOpacity>Próximo</TitleOpacity>

        <GoBack
          onPress={() => {
            navigation.navigate('Mitos2');
          }}>
          <Text>Perco minha cidadania brasileira?</Text>
          <GoBackIcon name="chevron-right" size={25} color="#db822b" />
        </GoBack>
      </ContainerImage>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </Container>
  );
};

export default Mitos;
