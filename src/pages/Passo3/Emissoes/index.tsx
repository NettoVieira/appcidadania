/* eslint-disable react/jsx-closing-bracket-location */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {List} from 'react-native-paper';
import api from '../../../services/api';

import {
  Container,
  Title,
  ContainerHeader,
  Subtitle,
  ContainerTitle,
  ContainerList,
  IconList,
  Colums,
  ContainerColums,
  ColumsTipo,
  ColumsSolicitado,
} from './styles';

interface Usuario extends Object {
  Name: string;
}

const Emissoes: React.FC = () => {
  const [view, setView] = useState<Usuario>();
  const [expanded, setExpanded] = useState<boolean>();
  const [iconName, setIconName] = useState('chevron-down');

  useEffect(() => {
    async function getItem() {
      const [response] = await AsyncStorage.multiGet([
        '@appcidadania:response',
      ]);

      const Response = JSON.parse(response[1] || '{}');

      setView(Response.User);

      const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
      const req = JSON.parse(Items[1] || '{}');

      const params = {
        Token: req.Request.Token,
        TokenDevice: req.Request.TokenDevice,
      };
      try {
        const {data} = await api.post('getDocuments', params);

        console.log(data.Kinships[0].Documents);
      } catch {
        console.log('erro');
      }
    }
    getItem();
  }, []);

  const handleAlteraIcon = () => {};

  return (
    <Container>
      <ContainerHeader>
        <ContainerTitle>
          <Subtitle>Crie seu checklist</Subtitle>
          <Title>Emissões</Title>
        </ContainerTitle>
      </ContainerHeader>
      <ContainerList>
        <List.Section>
          <List.Accordion
            title="Você"
            titleStyle={{
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              color: '#000',
            }}
            style={{
              backgroundColor: '#f8f8f8',
              borderBottomWidth: 1,
              borderBottomColor: '#efefef',
            }}
            description={view?.Name}
            descriptionStyle={{fontSize: 14, fontFamily: 'Poppins-Regular'}}
            onPress={() => {}}
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <ContainerColums>
              <ColumsTipo>Tipo</ColumsTipo>
              <ColumsSolicitado>Solicitado</ColumsSolicitado>
              <Colums>Em mãos</Colums>
            </ContainerColums>
          </List.Accordion>

          <List.Accordion
            title="Pai"
            titleStyle={{
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              color: '#000',
            }}
            style={{
              backgroundColor: '#f8f8f8',
              borderBottomWidth: 1,
              borderBottomColor: '#efefef',
            }}
            description="Adicionar Nome"
            descriptionStyle={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#f09d4c',
            }}
            onPress={() => {}}
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Avô"
            titleStyle={{
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              color: '#000',
            }}
            style={{
              backgroundColor: '#f8f8f8',
              borderBottomWidth: 1,
              borderBottomColor: '#efefef',
            }}
            description="Adicionar Nome"
            descriptionStyle={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#f09d4c',
            }}
            onPress={() => {}}
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Bisavô"
            titleStyle={{
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              color: '#000',
            }}
            style={{
              backgroundColor: '#f8f8f8',
              borderBottomWidth: 1,
              borderBottomColor: '#efefef',
            }}
            description="Adicionar Nome"
            descriptionStyle={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#f09d4c',
            }}
            onPress={() => {}}
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Trisavô"
            titleStyle={{
              fontSize: 16,
              fontFamily: 'Poppins-SemiBold',
              color: '#000',
            }}
            style={{
              backgroundColor: '#f8f8f8',
              borderBottomWidth: 1,
              borderBottomColor: '#efefef',
            }}
            description="Adicionar Nome"
            descriptionStyle={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              color: '#f09d4c',
            }}
            onPress={() => {}}
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ContainerList>
    </Container>
  );
};

export default Emissoes;
