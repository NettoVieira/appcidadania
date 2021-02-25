import React from 'react';

import {
  Container,
  Title,
  Scroll,
  ContainerTitle,
  SubTitle,
  Paragraph,
  ButtonHelpText,
  GoBack,
  GoBackIcon,
  Text,
} from './styles';

const Passo1: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <ContainerTitle>
          <Title>Cidadania Italiana </Title>
        </ContainerTitle>
        <SubTitle>Entenda como funciona</SubTitle>
        <Paragraph>
          A nacionalidade na Itália é regida pelo princípio do jus sanguinis.
          Deixe-me simplificar: é italiano aquele que é descendente de um
          Italiano. Se você sabe que tem um ascendente nascido na Itália, ou já
          ouviu alguma tia dizer que se lembra de “ouvir vovô falar que o pai
          dele tinha vindo da Itália”, então este App foi feito pra você.
        </Paragraph>

        <GoBack>
          <Text>Ler introdução completa</Text>
          <GoBackIcon name="chevron-right" size={30} color="#db822b" />
        </GoBack>
      </Scroll>
    </Container>
  );
};

export default Passo1;
