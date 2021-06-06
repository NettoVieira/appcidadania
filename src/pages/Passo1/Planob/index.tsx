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
import Banner from '../../../Components/Banner';

const Planob: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <ContainerHeader>
          <Image source={Coracao} />
        </ContainerHeader>
        <ContainerBody>
          <Title>Ter sempre um plano B</Title>
          <Paragraph>
            Não está muito bom por aí? Como cidadão italiano você terá o
            privilégio de escolher entre os 27 países da União Europeia pra
            iniciar uma vida nova.
          </Paragraph>
        </ContainerBody>
        <ContainerFooter>
          <TitleOpacity>Próximo</TitleOpacity>
          <GoBack
            onPress={() => {
              navigation.navigate('Oportunidade');
            }}>
            <Text>Oportunidade de trabalho</Text>
            <GoBackIcon name="chevron-right" size={24} color="#db822b" />
          </GoBack>
        </ContainerFooter>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
  );
};

export default Planob;
