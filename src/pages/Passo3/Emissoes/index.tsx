/* eslint-disable react/jsx-closing-bracket-location */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {List} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/Icon';

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
  ItemsList,
  Descricao,
  ContainerFlatList,
  AddDocs,
  AddDocsText,
  Switch,
  ContainerSwitch,
  ContainerDescricao,
} from './styles';

interface Usuario extends Object {
  Name: string;
}

export interface List {
  Description: string;
  DocumentId: number;
  DocumentName: string;
  IsCaught: boolean;
  IsRequired: boolean;
}

const Emissoes: React.FC = () => {
  const [view, setView] = useState<Usuario>();
  const [listvoce, setListvoce] = useState<List[]>([]);
  const [iconName, setIconName] = useState('chevron-down');

  const [isEnabled, setIsEnabled] = useState(false);

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

        setListvoce(data.Kinships[0].Documents);
      } catch {
        console.log('erro');
      }
    }
    getItem();
  }, []);

  const updateSwitch = useCallback(
    (item: List, index: number, value: boolean) => {
      const itensCopy = Array.from(listvoce);

      const obj = {
        Description: item.Description,
        DocumentId: item.DocumentId,
        DocumentName: item.DocumentName,
        IsCaught: item.IsCaught,
        IsRequired: value,
      };

      itensCopy.splice(index, 1, obj);
      setListvoce(itensCopy);
    },
    [listvoce],
  );

  const updateSwitchIsCaught = useCallback(
    (item: List, index: number, value: boolean) => {
      const itensCopy = Array.from(listvoce);

      const obj = {
        Description: item.Description,
        DocumentId: item.DocumentId,
        DocumentName: item.DocumentName,
        IsCaught: value,
        IsRequired: item.IsRequired,
      };

      itensCopy.splice(index, 1, obj);
      setListvoce(itensCopy);
    },
    [listvoce],
  );

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
            onPress={() => {
              console.log('teste');
            }}
            right={() => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <ContainerColums>
              <ColumsTipo>Tipo</ColumsTipo>
              <ColumsSolicitado>Solicitado</ColumsSolicitado>
              <Colums>Em mãos</Colums>
            </ContainerColums>
            <ItemsList
              data={listvoce}
              keyExtractor={(_, index) => index.toString()}
              refreshing={false}
              renderItem={({item}) => (
                <ContainerFlatList>
                  <ContainerDescricao>
                    <Descricao>{item.DocumentName}</Descricao>
                  </ContainerDescricao>
                  <ContainerSwitch>
                    <Switch
                      trackColor={{false: '#767577', true: '#32d5a0'}}
                      thumbColor="#f4f3f4"
                      onValueChange={(value) => {
                        const idx = listvoce.indexOf(item);

                        updateSwitch(item, idx, value);
                      }}
                      value={item.IsRequired}
                    />
                    <Switch
                      trackColor={{false: '#767577', true: '#32d5a0'}}
                      thumbColor="#f4f3f4"
                      onValueChange={(value) => {
                        const idx = listvoce.indexOf(item);

                        updateSwitchIsCaught(item, idx, value);
                      }}
                      value={item.IsCaught}
                    />
                  </ContainerSwitch>
                </ContainerFlatList>
              )}
            />
            <AddDocs>
              <IconList name="plus-circle" size={20} color="#f09d4c" />
              <AddDocsText>Adicionar certidão</AddDocsText>
            </AddDocs>
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
