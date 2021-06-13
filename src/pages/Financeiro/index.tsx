import React from 'react';

import {
  Container,
  Title,
  ContainerCusto,
  Header,
  ContainerIcon,
  Icon,
  ContainerText,
  DescCusto,
  Valor,
  Body,
  ContainerTitle,
  Subtitle,
  AddDocs,
  IconList,
  AddDocsText,
} from './styles';

import IconSifrao from '../../assets/sifrao.png';

const Financeiro: React.FC = () => {
  return (
    <Container>
      <Header>
        <ContainerCusto>
          <ContainerIcon>
            <Icon source={IconSifrao} />
          </ContainerIcon>
          <ContainerText>
            <DescCusto>Custo total até agora</DescCusto>
            <Valor>R$ 1.203,31</Valor>
          </ContainerText>
        </ContainerCusto>
      </Header>
      <Body>
        <ContainerTitle>
          <Subtitle>Crie seu checklist</Subtitle>
          <Title>Financeiro</Title>
        </ContainerTitle>
        <AddDocs>
          <IconList name="plus-circle" size={20} color="#f09d4c" />
          <AddDocsText>Adicionar certidão</AddDocsText>
        </AddDocs>
      </Body>
    </Container>
  );
};

export default Financeiro;
