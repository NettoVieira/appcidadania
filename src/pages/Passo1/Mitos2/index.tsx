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

import Barprogress from '../../../assets/progressbar-mito2.png';
import {GoBack, GoBackIcon, Text} from '../styles';
import Banner from '../../../Components/Banner';

const Mitos2: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerImage>
        <Progresbar source={Barprogress} />
        <TitleOpacity>Cidadania Italiana</TitleOpacity>
        <Title>Principais mitos</Title>
        <Subtitle>
          Se eu me tornar cidadão italiano, vou perder a brasileira:
        </Subtitle>
        <Paragraph>
          Outra conversa fiada! A legislação brasileira permite mais de uma
          cidadania, desde que sejam originárias ,ou seja, de nascimento, lembra
          que te disse que terá sua certidão de nascimento brasileira transcrita
          e registrada nos livros de registro italianos? Então, fica tranquilo,
          que você terá duas nacionalidades, não perderá nenhuma.
        </Paragraph>
        <TitleOpacity>Próximo</TitleOpacity>

        <GoBack
          onPress={() => {
            navigation.navigate('Mitos3');
          }}>
          <Text>Linha de transmissão para mulher</Text>
          <GoBackIcon name="chevron-right" size={25} color="#db822b" />
        </GoBack>
      </ContainerImage>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </Container>
  );
};

export default Mitos2;
