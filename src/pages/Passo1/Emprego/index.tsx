/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Trabalho from '../../../assets/loja.png';

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
import Banner from '../../../Components/Banner';

const Emprego: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <ContainerHeader>
          <Image source={Trabalho} />
        </ContainerHeader>
        <ContainerBody>
          <Title>Emprego e benefícios sociais</Title>
          <Paragraph>
            Por ser um cidadão italiano, você poderá participar dos diversos
            sistemas excelentes de segurança social em vigor na União Europeia,
            onde quer que decida morar. Isso significa que se você não puder
            trabalhar devido a uma deficiência, incapacidade de encontrar
            trabalho ou por causa de uma doença, você terá a segurança de saber
            que poderá solicitar os benefícios, se necessário. Além disso, se
            você for demitido injustamente de seu emprego, poderá solicitar uma
            indenização.
          </Paragraph>
        </ContainerBody>
        <ContainerFooter>
          <TitleOpacity>Próximo</TitleOpacity>
          <GoBack
            onPress={() => {
              navigation.navigate('Ensino');
            }}>
            <Text>Ensino de baixo custo e alta qualidade</Text>
            <GoBackIcon name="chevron-right" size={24} color="#db822b" />
          </GoBack>
        </ContainerFooter>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
  );
};

export default Emprego;
