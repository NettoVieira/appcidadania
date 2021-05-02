/* eslint-disable react/jsx-closing-bracket-location */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {LogBox, Text} from 'react-native';
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
  ItemsList,
  Descricao,
  ContainerFlatList,
  AddDocs,
  AddDocsText,
  Switch,
  ContainerSwitch,
  ContainerDescricao,
  ButtonContinua,
  ButtonText,
  ButtonFechar,
  ButtonTextFechar,
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
  const [listpai, setListpai] = useState<List[]>([]);
  const [listavo, setListavo] = useState<List[]>([]);
  const [listbisavo, setListBisavo] = useState<List[]>([]);
  const [listtrisavo, setListtrisavo] = useState<List[]>([]);

  const [iconName, setIconName] = useState('chevron-down');

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
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
        setListpai(data.Kinships[1].Documents);
        setListavo(data.Kinships[2].Documents);
        setListBisavo(data.Kinships[3].Documents);
        setListtrisavo(data.Kinships[4].Documents);
      } catch {
        console.log('erro');
      }
    }
    getItem();
  }, []);

  const updateSwitchIsRequired = useCallback(
    (item: List, index: number, value: boolean, Documents: string) => {
      const itensCopy = Array.from(listvoce);
      const intesCopypai = Array.from(listpai);
      const itensCopyavo = Array.from(listavo);
      const intesCopybisavo = Array.from(listbisavo);
      const intesCopytrisavo = Array.from(listtrisavo);

      const obj = {
        Description: item.Description,
        DocumentId: item.DocumentId,
        DocumentName: item.DocumentName,
        IsCaught: item.IsCaught,
        IsRequired: value,
      };

      if (Documents === 'voce') {
        itensCopy.splice(index, 1, obj);
        setListvoce(itensCopy);
      } else if (Documents === 'pai') {
        intesCopypai.splice(index, 1, obj);
        setListpai(intesCopypai);
      } else if (Documents === 'avo') {
        itensCopyavo.splice(index, 1, obj);
        setListavo(itensCopyavo);
      } else if (Documents === 'bisavo') {
        intesCopybisavo.splice(index, 1, obj);
        setListBisavo(intesCopybisavo);
      } else if (Documents === 'trisavo') {
        intesCopytrisavo.splice(index, 1, obj);
        setListBisavo(intesCopytrisavo);
      }
    },
    [listavo, listbisavo, listpai, listtrisavo, listvoce],
  );

  const updateSwitchIsCaught = useCallback(
    (item: List, index: number, value: boolean, Documents: string) => {
      const itensCopy = Array.from(listvoce);
      const intesCopypai = Array.from(listpai);
      const itensCopyavo = Array.from(listavo);
      const intesCopybisavo = Array.from(listbisavo);
      const intesCopytrisavo = Array.from(listtrisavo);

      const obj = {
        Description: item.Description,
        DocumentId: item.DocumentId,
        DocumentName: item.DocumentName,
        IsCaught: value,
        IsRequired: item.IsRequired,
      };

      if (Documents === 'voce') {
        itensCopy.splice(index, 1, obj);
        setListvoce(itensCopy);
      } else if (Documents === 'pai') {
        intesCopypai.splice(index, 1, obj);
        setListpai(intesCopypai);
      } else if (Documents === 'avo') {
        itensCopyavo.splice(index, 1, obj);
        setListavo(itensCopyavo);
      } else if (Documents === 'bisavo') {
        intesCopybisavo.splice(index, 1, obj);
        setListBisavo(intesCopybisavo);
      } else if (Documents === 'trisavo') {
        intesCopytrisavo.splice(index, 1, obj);
        setListBisavo(intesCopytrisavo);
      }
    },
    [listavo, listbisavo, listpai, listtrisavo, listvoce],
  );

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
          {/* Voce */}
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
              scrollEnabled={false}
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

                        updateSwitchIsRequired(item, idx, value, 'voce');
                      }}
                      value={item.IsRequired}
                    />
                    <Switch
                      trackColor={{false: '#767577', true: '#32d5a0'}}
                      thumbColor="#f4f3f4"
                      onValueChange={(value) => {
                        const idx = listvoce.indexOf(item);

                        updateSwitchIsCaught(item, idx, value, 'voce');
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
          {/* Pai */}
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
            <ItemsList
              data={listpai}
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
                        const idx = listpai.indexOf(item);

                        updateSwitchIsRequired(item, idx, value, 'pai');
                      }}
                      value={item.IsRequired}
                    />
                    <Switch
                      trackColor={{false: '#767577', true: '#32d5a0'}}
                      thumbColor="#f4f3f4"
                      onValueChange={(value) => {
                        const idx = listpai.indexOf(item);

                        updateSwitchIsCaught(item, idx, value, 'pai');
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
          {/* avo */}
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
            right={() => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <ItemsList
              data={listavo}
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
                        const idx = listavo.indexOf(item);

                        updateSwitchIsRequired(item, idx, value, 'avo');
                      }}
                      value={item.IsRequired}
                    />
                    <Switch
                      trackColor={{false: '#767577', true: '#32d5a0'}}
                      thumbColor="#f4f3f4"
                      onValueChange={(value) => {
                        const idx = listavo.indexOf(item);

                        updateSwitchIsCaught(item, idx, value, 'avo');
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
          {/* bisavo */}
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
            <ItemsList
              data={listbisavo}
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
                        const idx = listbisavo.indexOf(item);

                        updateSwitchIsRequired(item, idx, value, 'bisavo');
                      }}
                      value={item.IsRequired}
                    />
                    <Switch
                      trackColor={{false: '#767577', true: '#32d5a0'}}
                      thumbColor="#f4f3f4"
                      onValueChange={(value) => {
                        const idx = listbisavo.indexOf(item);

                        updateSwitchIsCaught(item, idx, value, 'bisavo');
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
          {/* trisavo */}
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
            <ItemsList
              data={listtrisavo}
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
                        const idx = listtrisavo.indexOf(item);

                        updateSwitchIsRequired(item, idx, value, 'trisavo');
                      }}
                      value={item.IsRequired}
                    />
                    <Switch
                      trackColor={{false: '#767577', true: '#32d5a0'}}
                      thumbColor="#f4f3f4"
                      onValueChange={(value) => {
                        const idx = listtrisavo.indexOf(item);

                        updateSwitchIsCaught(item, idx, value, 'trisavo');
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
        </List.Section>
      </ContainerList>
      <ButtonContinua>
        <ButtonText>Gerar relatório completo</ButtonText>
      </ButtonContinua>
      <ButtonFechar>
        <ButtonTextFechar>Fechar</ButtonTextFechar>
      </ButtonFechar>
    </Container>
  );
};

export default Emissoes;
