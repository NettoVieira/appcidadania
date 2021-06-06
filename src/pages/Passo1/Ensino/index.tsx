/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Trabalho from '../../../assets/icon-ensino.png';

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

const Ensino: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <ContainerHeader>
          <Image source={Trabalho} />
        </ContainerHeader>
        <ContainerBody>
          <Title>Ensino baixo custo e alta qualidade</Title>
          <Paragraph>
            Cidadão italiano tem acesso facilitado, ensino gratuito ou de baixo
            custo em instituições na Itália e em qualquer outro país da União
            Europeia. Imagina poder estudar não somente em escolas, mas cursar
            aquela sonhada graduação, pós-graduação, ou aprender outra língua em
            instituições nativas. Para quem tem filhos, é uma herança e tanto.
            Além de pagar 3x menos que um brasileiro sem dupla cidadania, o
            cidadão italiano pode até solicitar bolsas de estudos de diversos
            órgãos, com a oportunidade de concorrer em condições iguais com os
            demais europeus.
          </Paragraph>
        </ContainerBody>
        <ContainerFooter>
          <TitleOpacity>Próximo</TitleOpacity>
          <GoBack
            onPress={() => {
              navigation.navigate('Beneficios');
            }}>
            <Text>Benefícios culturais</Text>
            <GoBackIcon name="chevron-right" size={24} color="#db822b" />
          </GoBack>
        </ContainerFooter>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
  );
};

export default Ensino;
