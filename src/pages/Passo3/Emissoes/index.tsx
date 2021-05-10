/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, LogBox, StyleSheet, Text, View} from 'react-native';

import {List} from 'react-native-paper';
import Input from '../../../Components/react-native-input-style/input/Input';
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
  Modal,
  HeaderModal,
  ButtonClose,
  IconClose,
  ContainerTextModal,
  BodyModal,
  ContainerInputs,
  TextAreaInput,
  TextAreaView,
  ContainerTextArea,
  FooterModal,
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

interface Modal {
  isVisible: boolean;
  parent: string;
}

const Emissoes: React.FC = () => {
  const [view, setView] = useState<Usuario>();
  const [listvoce, setListvoce] = useState<List[]>([]);
  const [listpai, setListpai] = useState<List[]>([]);
  const [listavo, setListavo] = useState<List[]>([]);
  const [listbisavo, setListBisavo] = useState<List[]>([]);
  const [listtrisavo, setListtrisavo] = useState<List[]>([]);
  const [modalVisible, setModalVisible] = useState<Modal>({
    isVisible: false,
    parent: '',
  });
  const [documentname, setDocumentname] = useState('');
  const [textarea, setTextArea] = useState('');

  const [iconName, _] = useState('chevron-down');

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

  const handleAdiconaDocumento = useCallback((parent: string) => {
    setModalVisible({isVisible: true, parent});
  }, []);

  const handleAdicionaDocumentoChecklist = useCallback(async () => {
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const {Request, User} = JSON.parse(Items[1] || '{}');
    let parent = '';

    if (modalVisible.parent === 'voce') {
      parent = '0';
    } else if (modalVisible.parent === 'pai') {
      parent = '1';
    } else if (modalVisible.parent === 'avo') {
      parent = '2';
    } else if (modalVisible.parent === 'bisavo') {
      parent = '3';
    } else if (modalVisible.parent === 'trisavo') {
      parent = '4';
    }

    const params = {
      Token: Request.Token,
      TokenDevice: Request.TokenDevice,
      ParentId: parent,
      DocumentName: documentname,
      Description: textarea,
    };

    const {data} = await api.post('insertDocument', params);

    setModalVisible({isVisible: false, parent: ''});

    setListvoce(data.Kinships[0].Documents);
    setListpai(data.Kinships[1].Documents);
    setListavo(data.Kinships[2].Documents);
    setListBisavo(data.Kinships[3].Documents);
    setListtrisavo(data.Kinships[4].Documents);
  }, [documentname, modalVisible.parent, textarea]);

  return (
    <Container>
      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent
        visible={modalVisible?.isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible({isVisible: false, parent: ''});
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <HeaderModal>
              <ButtonClose
                onPress={() => {
                  setModalVisible({isVisible: false, parent: ''});
                }}>
                <IconClose name="x" size={45} color="#f09d4c" />
              </ButtonClose>
            </HeaderModal>
            <BodyModal>
              <ContainerTextModal>
                <Title>Adicionar certidão</Title>
                <Subtitle>
                  Nomeie e adicione a certidão para acompanhar o status e o
                  andamento do processo.
                </Subtitle>
              </ContainerTextModal>
              <ContainerInputs>
                <Input
                  id="name"
                  label="Tipo da certidão"
                  keyboardType="default"
                  onInputChange={(item: any) => {
                    setDocumentname(item);
                  }}
                  contain=""
                  initialValue=""
                  value=""
                  outlined
                  borderColor="#f09d4c"
                />
                <Subtitle style={{marginLeft: 10}}>
                  Ex:. Certidão de casamento
                </Subtitle>
                <ContainerTextArea>
                  <TextAreaView>
                    <TextAreaInput
                      style={{fontSize: 14, fontFamily: 'Poppins-Regular'}}
                      placeholder="Adicionar notas
                      (Livro, Folha, Cartórios)"
                      placeholderTextColor="grey"
                      onChangeText={(text) => {
                        setTextArea(text);
                      }}
                      multiline
                    />
                  </TextAreaView>
                </ContainerTextArea>
              </ContainerInputs>
            </BodyModal>
            <FooterModal>
              <ButtonContinua onPress={handleAdicionaDocumentoChecklist}>
                <ButtonText>Adicionar item ao checklist</ButtonText>
              </ButtonContinua>
            </FooterModal>
          </View>
        </View>
      </Modal>
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
                <>
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
                </>
              )}
            />
            <AddDocs
              onPress={() => {
                handleAdiconaDocumento('voce');
              }}>
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
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <ContainerColums>
              <ColumsTipo>Tipo</ColumsTipo>
              <ColumsSolicitado>Solicitado</ColumsSolicitado>
              <Colums>Em mãos</Colums>
            </ContainerColums>
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
            <AddDocs
              onPress={() => {
                handleAdiconaDocumento('pai');
              }}>
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
            right={() => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <ContainerColums>
              <ColumsTipo>Tipo</ColumsTipo>
              <ColumsSolicitado>Solicitado</ColumsSolicitado>
              <Colums>Em mãos</Colums>
            </ContainerColums>
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
            <AddDocs
              onPress={() => {
                handleAdiconaDocumento('avo');
              }}>
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
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <ContainerColums>
              <ColumsTipo>Tipo</ColumsTipo>
              <ColumsSolicitado>Solicitado</ColumsSolicitado>
              <Colums>Em mãos</Colums>
            </ContainerColums>
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
            <AddDocs
              onPress={() => {
                handleAdiconaDocumento('bisavo');
              }}>
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
            right={(a) => (
              <IconList name={iconName} size={25} color="#f09d4c" />
            )}>
            <ContainerColums>
              <ColumsTipo>Tipo</ColumsTipo>
              <ColumsSolicitado>Solicitado</ColumsSolicitado>
              <Colums>Em mãos</Colums>
            </ContainerColums>
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
            <AddDocs
              onPress={() => {
                handleAdiconaDocumento('trisavo');
              }}>
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  modalView: {
    marginTop: 290,
    height: 520,
    width: 390,
    backgroundColor: 'white',
    borderRadius: 20,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Emissoes;
