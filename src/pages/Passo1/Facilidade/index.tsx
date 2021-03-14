/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Trabalho from '../../../assets/icon-viagens.png';

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

const Facilidade: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerHeader>
        <Image source={Trabalho} />
      </ContainerHeader>
      <ContainerBody>
        <Title>Facilidade em viagens</Title>
        <Paragraph>
          Ao viajar para dentro e fora da Europa com um passaporte italiano,
          você poderá aproveitar as vantagens das filas rápidas de controle de
          passaportes que são reservadas para cidadãos europeus, além de evitar
          os longos questionamentos imigratórios, tornando as viagens
          internacionais muito mais fáceis e bem menos tensas. A Itália tem um
          dos passaportes mais poderosos do mundo, e cidadãos italianos podem
          viajar sem visto para 127 países ao redor do globo, incluindo o EUA.
        </Paragraph>
      </ContainerBody>
      <ContainerFooter>
        <TitleOpacity>Próximo</TitleOpacity>
        <GoBack
          onPress={() => {
            navigation.navigate('Heranca');
          }}>
          <Text>Deixar a cidadania de herança…</Text>
          <GoBackIcon name="chevron-right" size={24} color="#db822b" />
        </GoBack>
      </ContainerFooter>
    </Container>
  );
};

export default Facilidade;
