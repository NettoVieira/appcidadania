/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import Banner from '../../../Components/Banner';
import {
  Container,
  Progresbar,
  Title,
  TitleOpacity,
  ContainerImage,
  Subtitle,
  Paragraph,
} from './styles';

import Barprogress from '../../../assets/Progressbar.png';
import {GoBack, GoBackIcon, Text} from '../styles';

const Introducao: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <ContainerImage>
        <Progresbar source={Barprogress} />
        <TitleOpacity>Cidadania Italiana</TitleOpacity>
        <Title>Introdução</Title>
        <Subtitle>Mas por quê?</Subtitle>
        <Paragraph>
          Bom, nos últimos anos, muitos brasileiros descendentes de italianos
          sentiram a necessidade de obter o tão sonhado passaporte italiano, uns
          para honrar suas origens, outros porque identificaram grandes
          oportunidades mundo afora, e fazer isso sendo um europeu é outra
          conversa. Costumo dizer que o passaporte italiano é uma das chaves do
          mundo!
        </Paragraph>
        <TitleOpacity>Próximo</TitleOpacity>

        <GoBack
          onPress={() => {
            navigation.navigate('Introducao2');
          }}>
          <Text>Ler introdução completa</Text>
          <GoBackIcon name="chevron-right" size={25} color="#db822b" />
        </GoBack>
      </ContainerImage>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </Container>
  );
};

export default Introducao;
