/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Trabalho from '../../../assets/icon-heranca.png';

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

const Heranca: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <ContainerHeader>
          <Image source={Trabalho} />
        </ContainerHeader>
        <ContainerBody>
          <Title>Deixar a cidadania de herança para seus descendentes</Title>
          <Paragraph>
            No momento de seu reconhecimento como cidadão italiano, caso tenha
            filhos menores de 18 anos, eles também serão automaticamente
            reconhecidos como cidadãos italianos. Se você e seu parceiro
            planejam constituir família, todos os filhos que tiverem após o
            reconhecimento nascerão com o status de cidadão italiano, ou seja,
            todos estes benefícios se estenderão aos seus descendentes, sem que
            eles precisem se preocupar em passar pelo procedimento que você está
            fazendo agora. Já se convenceu? Espero que sim, porque estes são
            apenas alguns dos tantos benefícios que esse passaporte vermelhinho
            tem pra você.
          </Paragraph>
        </ContainerBody>
        <ContainerFooter>
          <TitleOpacity>Próximo</TitleOpacity>
          <GoBack
            onPress={() => {
              navigation.navigate('Aposentadoria');
            }}>
            <Text>Aposentadoria</Text>
            <GoBackIcon name="chevron-right" size={24} color="#db822b" />
          </GoBack>
        </ContainerFooter>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
  );
};

export default Heranca;
