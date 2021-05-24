/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, LogBox, StyleSheet, Switch, Text, View} from 'react-native';

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
  ItemsList,
  Descricao,
  ContainerFlatList,
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
  ContainerListItem,
  TitleList,
  ContainerTexts,
  ButtonAddName,
  ButtonAddNameText,
  IconList,
  ContainerIcon,
  ContainerListGrid,
  ContainerColums,
  ColumsTipo,
  ColumsSolicitado,
  Colums,
  ContainerDescricao,
  ContainerSwitch,
  ContainerGrid,
  ListDocs,
} from './styles';

interface Usuario extends Object {
  Name: string;
}

export interface Kinships {
  Documents: ListDocuments[];
  Name: string;
  ParentId: string;
  ParentType: string;
  isVisibleGrid: boolean;
}

export interface ListDocuments {
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
  const [kinships, setKinships] = useState<Kinships[]>([]);
  const [kinshipselected, setSelectedKinship] = useState<any>();

  const [modalVisible, setModalVisible] = useState<Modal>({
    isVisible: false,
    parent: '',
  });
  const [documentname, setDocumentname] = useState('');
  const [textarea, setTextArea] = useState('');

  const [iconName, setIconName] = useState('chevron-down');

  useFocusEffect(
    useCallback(() => {
      async function getItem() {
        async function getItem() {
          const [response] = await AsyncStorage.multiGet([
            '@appcidadania:response',
          ]);

          const Response = JSON.parse(response[1] || '{}');

          setView(Response.User);

          const [Items] = await AsyncStorage.multiGet([
            '@appcidadania:response',
          ]);
          const req = JSON.parse(Items[1] || '{}');

          const params = {
            Token: req.Request.Token,
            TokenDevice: req.Request.TokenDevice,
          };

          try {
            const {data} = await api.post('getDocuments', params);

            const kinships = data.Kinships.map(
              (item: Kinships, index: any, array: any) => {
                const list = {
                  Documents: item.Documents,
                  Name: item.Name,
                  ParentId: item.ParentId,
                  ParentType: item.ParentType,
                  isVisibleGrid: false,
                };

                return list;
              },
            );

            setKinships(kinships);
          } catch (err) {
            console.log(err);
          }
        }
        getItem();
      }
      getItem();
    }, []),
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
  }, [documentname, modalVisible.parent, textarea]);

  const handleAtualizaDocuments = useCallback(
    (item: ListDocuments, value, index) => {
      setKinships((oldKinships: any) =>
        oldKinships.map((kinship: Kinships) => {
          kinship.Documents.map((docs: ListDocuments) => {
            console.log(docs);
            docs.DocumentId === item.DocumentId
              ? {
                  ...kinship,
                }
              : kinship;
          });
        }),
      );
    },
    [],
  );

  const handleAtualizaLista = useCallback(
    (item: Kinships, index: any) => {
      setSelectedKinship(index);
      const itensCopy = Array.from(kinships);
      if (item.isVisibleGrid) {
        const list = {
          Documents: item.Documents,
          Name: item.Name,
          ParentId: item.ParentId,
          ParentType: item.ParentType,
          isVisibleGrid: false,
        };

        const indexKinships = kinships.indexOf(item);

        itensCopy.splice(indexKinships, 1, list);
        setKinships(itensCopy);
      } else {
        const list = {
          Documents: item.Documents,
          Name: item.Name,
          ParentId: item.ParentId,
          ParentType: item.ParentType,
          isVisibleGrid: true,
        };

        const indexKinships = kinships.indexOf(item);

        itensCopy.splice(indexKinships, 1, list);
        setKinships(itensCopy);
      }
    },
    [kinships],
  );

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
        <ItemsList
          data={kinships}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <>
              <ContainerFlatList>
                <ContainerListItem
                  onPress={() => {
                    handleAtualizaLista(item, index);
                  }}
                  style={{borderBottomColor: '#efefef', borderBottomWidth: 1}}>
                  <ContainerTexts>
                    <TitleList>{item.ParentType}</TitleList>
                    {item.Name ? (
                      <ButtonAddName disabled>
                        <ButtonAddNameText>{item.Name}</ButtonAddNameText>
                      </ButtonAddName>
                    ) : (
                      <ButtonAddName>
                        <ButtonAddNameText style={{color: '#f09d4c'}}>
                          Adicionar nome
                        </ButtonAddNameText>
                      </ButtonAddName>
                    )}
                  </ContainerTexts>
                  <ContainerIcon>
                    <IconList name="chevron-up" size={25} color="#f09d4c" />
                  </ContainerIcon>
                </ContainerListItem>
              </ContainerFlatList>
              {item.isVisibleGrid ? (
                <ContainerListGrid>
                  <ListDocs
                    data={item.Documents}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item, index}) => (
                      <>
                        {index === 0 ? (
                          <ContainerColums>
                            <ColumsTipo>Tipo</ColumsTipo>
                            <ColumsSolicitado>Solicitado</ColumsSolicitado>
                            <Colums>Em mãos</Colums>
                          </ContainerColums>
                        ) : (
                          <></>
                        )}
                        <ContainerGrid>
                          <ContainerDescricao>
                            <Descricao>{item.DocumentName}</Descricao>
                          </ContainerDescricao>
                          <ContainerSwitch>
                            <Switch
                              trackColor={{false: '#767577', true: '#32d5a0'}}
                              thumbColor="#f4f3f4"
                              style={{marginRight: 30}}
                              value={item.IsRequired}
                              onValueChange={(value) => {
                                handleAtualizaDocuments(item, value, null);
                              }}
                            />
                            <Switch
                              trackColor={{false: '#767577', true: '#32d5a0'}}
                              thumbColor="#f4f3f4"
                              value={item.IsCaught}
                              onValueChange={(value) => {}}
                            />
                          </ContainerSwitch>
                        </ContainerGrid>
                      </>
                    )}
                  />
                </ContainerListGrid>
              ) : (
                <></>
              )}
            </>
          )}
        />
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
