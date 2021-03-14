/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Trabalho from '../../../assets/icon-beneficios.png';

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

const Beneficios: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerHeader>
        <Image source={Trabalho} />
      </ContainerHeader>
      <ContainerBody>
        <Title>Benefícios culturais</Title>
        <Paragraph>
          Outra vantagem de ter a cidadania italiana é poder participar da ampla
          variedade de programas oferecidos aos seus cidadãos. Muitos desses
          programas são para intercâmbios e experiências culturais, sejam eles
          educacionais ou em uma determinada profissão.
        </Paragraph>
      </ContainerBody>
      <ContainerFooter>
        <TitleOpacity>Próximo</TitleOpacity>
        <GoBack
          onPress={() => {
            navigation.navigate('Facilidade');
          }}>
          <Text>Facilidade em viagens</Text>
          <GoBackIcon name="chevron-right" size={24} color="#db822b" />
        </GoBack>
      </ContainerFooter>
    </Container>
  );
};

export default Beneficios;
