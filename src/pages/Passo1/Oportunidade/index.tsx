/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Trabalho from '../../../assets/trabalho.png';

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

const Oportunidade: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerHeader>
        <Image source={Trabalho} />
      </ContainerHeader>
      <ContainerBody>
        <Title>Oportunidade de trabalho</Title>
        <Paragraph>
          Com o passaporte brasileiro a burocracia é tanta que muita gente acaba
          aceitando qualquer trabalho fora do Brasil, e raramente tem a
          oportunidade de exercer bons cargos. Já como italiano são outros 500,
          você não só poderá reinvidicar seus direitos como qualquer outro
          Europeu, como terá a chance de trabalhar na área que estudou, ou esta
          estudando, sem a necessidade de se desgastar com pedidos e renovações
          de vistos, ou permissões especiais.
        </Paragraph>
      </ContainerBody>
      <ContainerFooter>
        <TitleOpacity>Próximo</TitleOpacity>
        <GoBack
          onPress={() => {
            navigation.navigate('Emprego');
          }}>
          <Text>Emprego e benefícios sociais</Text>
          <GoBackIcon name="chevron-right" size={24} color="#db822b" />
        </GoBack>
      </ContainerFooter>
    </Container>
  );
};

export default Oportunidade;
