/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  ContainerHeader,
  ContainerBody,
  SubTitle,
  TitleSection,
  ContainerSection,
  SubTitleSection,
  ContainerActions,
  Action,
  ActionImage,
  ActionText,
  ActionTextIcon,
  ContainerActionText,
  ActionSubText,
} from './styles';

import DocImage from '../../assets/Docimage.png';
import Banner from '../../Components/Banner';

const Passo3: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <ContainerBody>
          <ContainerHeader>
            <Title>Meus documentos</Title>
            <SubTitle>Tenha tudo sempre à mão</SubTitle>
          </ContainerHeader>
          <ContainerSection>
            <TitleSection style={{width: 230}}>
              A gente te explica para o que serve cada etapa
            </TitleSection>
            <SubTitleSection>
              A organização é um dos fatores principais de sucesso. Saiba sobre
              cada uma delas e tenha controle total de todas as etapas.
            </SubTitleSection>
          </ContainerSection>
          <ContainerActions>
            <Action
              onPress={() => {
                navigation.navigate('ActionEmissao');
              }}>
              <ActionImage source={DocImage} />
              <ContainerActionText>
                <ActionText>Emissões</ActionText>
                <ActionSubText>Para o que serve minhas emissões?</ActionSubText>
              </ContainerActionText>
              <Icon
                name="chevron-right"
                size={38}
                color="#f09d4c"
                style={{marginLeft: 15}}
              />
            </Action>
            <Action
              onPress={() => {
                navigation.navigate('ActionAnalise');
              }}>
              <ActionImage source={DocImage} />
              <ContainerActionText>
                <ActionText>Análise</ActionText>
                <ActionSubText>Como irei analisar os documentos?</ActionSubText>
              </ContainerActionText>
              <Icon
                name="chevron-right"
                size={38}
                color="#f09d4c"
                style={{marginLeft: 15}}
              />
            </Action>
            <Action
              onPress={() => {
                navigation.navigate('ActionRetificacao');
              }}>
              <ActionImage source={DocImage} />
              <ContainerActionText>
                <ActionText>Retificações</ActionText>
                <ActionSubText>Para o que serve esta etapa?</ActionSubText>
              </ContainerActionText>
              <Icon
                name="chevron-right"
                size={38}
                color="#f09d4c"
                style={{marginLeft: 15}}
              />
            </Action>
            <Action
              onPress={() => {
                navigation.navigate('ActionCNN');
              }}>
              <ActionImage source={DocImage} />
              <ContainerActionText>
                <ActionText>CNN</ActionText>
                <ActionSubText>O que é um CNN?</ActionSubText>
              </ContainerActionText>
              <Icon
                name="chevron-right"
                size={38}
                color="#f09d4c"
                style={{marginLeft: 15}}
              />
            </Action>
            <Action
              onPress={() => {
                navigation.navigate('ActionTraducao');
              }}>
              <ActionImage source={DocImage} />
              <ContainerActionText>
                <ActionText>Traduções juramentadas</ActionText>
                <ActionSubText>
                  Preciso mesmo executar essa etapa?
                </ActionSubText>
              </ContainerActionText>
              <Icon
                name="chevron-right"
                size={38}
                color="#f09d4c"
                style={{marginLeft: 15}}
              />
            </Action>
            <Action
              onPress={() => {
                navigation.navigate('ActionApostilamentos');
              }}>
              <ActionImage source={DocImage} />
              <ContainerActionText>
                <ActionText>Apostilamentos</ActionText>
                <ActionSubText>Pra que serve o apostilamento?</ActionSubText>
              </ContainerActionText>
              <Icon
                name="chevron-right"
                size={38}
                color="#f09d4c"
                style={{marginLeft: 15}}
              />
            </Action>
          </ContainerActions>
        </ContainerBody>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
  );
};

export default Passo3;
