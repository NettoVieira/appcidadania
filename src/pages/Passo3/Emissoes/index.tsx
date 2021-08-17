/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from 'react-native';
import Share from 'react-native-share';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RFValue} from 'react-native-responsive-fontsize';
import Banner from '../../../Components/Banner';
import Load from '../../../Components/Loading';

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
  AddDocs,
  AddDocsText,
  Item,
  ItemButton,
  AdicionarText,
  ItemButtonText,
  ItemButtonKinship,
  Gerir,
  ButtonGerir,
} from './styles';

import Geririmg from '../../../assets/gerir_enable.png';

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
  const navigation = useNavigation();
  const [view, setView] = useState<Usuario>();
  const [kinships, setKinships] = useState<Kinships[]>([]);
  const [loading, setLoading] = useState(false);
  const [isediting, setEditing] = useState(false);
  const swipeableRef = useRef<Swipeable>(null);

  const [modalVisible, setModalVisible] = useState<Modal>({
    isVisible: false,
    parent: '',
  });
  const [documentname, setDocumentname] = useState('');
  const [textarea, setTextArea] = useState('');

  useFocusEffect(
    useCallback(() => {
      async function getItem() {
        setLoading(true);

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

          const kinships = data.Kinships.map((item: Kinships) => {
            const list = {
              Documents: item.Documents,
              Name: item.Name,
              ParentId: item.ParentId,
              ParentType: item.ParentType,
              isVisibleGrid: false,
            };

            return list;
          });

          setKinships(kinships);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      }

      getItem();
    }, []),
  );

  const handleAdiconaDocumento = useCallback((parent: string) => {
    setModalVisible({isVisible: true, parent});
  }, []);

  const handleDeletaDocumento = useCallback(async (item: any) => {
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const {Request} = JSON.parse(Items[1] || '{}');

    const params = {
      Token: Request.Token,
      TokenDevice: Request.TokenDevice,
      DocumentId: item,
    };

    const {data} = await api.post('deleteDocument', params);
    const kinships = data.Kinships.map((item: Kinships) => {
      const list = {
        Documents: item.Documents,
        Name: item.Name,
        ParentId: item.ParentId,
        ParentType: item.ParentType,
        isVisibleGrid: true,
      };

      return list;
    });

    setKinships(kinships);
  }, []);

  const handleAdicionaDocumentoChecklist = useCallback(async () => {
    console.log('entrei aqui');

    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const {Request} = JSON.parse(Items[1] || '{}');

    const params = {
      Token: Request.Token,
      TokenDevice: Request.TokenDevice,
      ParentId: modalVisible.parent,
      DocumentName: documentname,
      Description: textarea,
    };

    const {data} = await api.post('insertDocument', params);

    console.log(data);

    const kinships = data.Kinships.map((item: Kinships) => {
      const list = {
        Documents: item.Documents,
        Name: item.Name,
        ParentId: item.ParentId,
        ParentType: item.ParentType,
        isVisibleGrid: false,
      };

      return list;
    });

    setKinships(kinships);

    setModalVisible({isVisible: false, parent: ''});
  }, [documentname, modalVisible.parent, textarea]);

  const handleAtualizaIsRequired = useCallback(
    async (item: ListDocuments, valueIsrequired) => {
      try {
        setLoading(true);
        const [response] = await AsyncStorage.multiGet([
          '@appcidadania:response',
        ]);

        const Response = JSON.parse(response[1] || '{}');

        setView(Response.User);

        const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
        const req = JSON.parse(Items[1] || '{}');

        setKinships((oldKinships: any) =>
          oldKinships.map((kinship: Kinships) => {
            kinship.Documents
              ? (kinship.Documents = kinship.Documents.map(
                  (doc: ListDocuments) => {
                    return doc.DocumentId === item.DocumentId
                      ? {
                          ...doc,
                          IsRequired: valueIsrequired,
                        }
                      : doc;
                  },
                ))
              : kinship.Documents;
            return kinship;
          }),
        );

        const params = {
          Token: req.Request.Token,
          TokenDevice: req.Request.TokenDevice,
          DocumentId: item.DocumentId,
          IsCaught: valueIsrequired,
        };
        await api.post('updateDocument', params);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Erro', 'Erro ao atualizar documento');
      }
    },
    [],
  );

  const handleAtualizaIsCaught = useCallback(
    async (item: ListDocuments, valueIscaught) => {
      setLoading(true);

      setLoading(false);

      try {
        setLoading(true);
        const [response] = await AsyncStorage.multiGet([
          '@appcidadania:response',
        ]);

        const Response = JSON.parse(response[1] || '{}');

        setView(Response.User);

        const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
        const req = JSON.parse(Items[1] || '{}');

        setKinships((oldKinships: any) =>
          oldKinships.map((kinship: Kinships) => {
            kinship.Documents
              ? (kinship.Documents = kinship.Documents.map(
                  (doc: ListDocuments) => {
                    return doc.DocumentId === item.DocumentId
                      ? {
                          ...doc,
                          IsCaught: valueIscaught,
                        }
                      : doc;
                  },
                ))
              : kinship.Documents;
            return kinship;
          }),
        );

        const params = {
          Token: req.Request.Token,
          TokenDevice: req.Request.TokenDevice,
          DocumentId: item.DocumentId,
          IsCaught: valueIscaught,
        };
        await api.post('updateDocument', params);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        Alert.alert('Erro', 'Erro ao atualizar documento');
      }
    },
    [],
  );

  const handleAtualizaLista = useCallback(
    (item: Kinships, index: any) => {
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

  const handleGeraRelatorio = useCallback(async () => {
    const [response] = await AsyncStorage.multiGet(['@appcidadania:response']);

    const Response = JSON.parse(response[1] || '{}');

    setView(Response.User);

    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const req = JSON.parse(Items[1] || '{}');

    const params = {
      Token: req.Request.Token,
      TokenDevice: req.Request.TokenDevice,
    };

    const res = await api.post('exportDocuments', params);
    console.log(res.data.pdf);

    const shareOptions = {
      title: 'Vim do appcidadania',
      failOnCancel: false,
      saveToFiles: true,
      url: `data:application/pdf;base64,${res.data.pdf}`, // base64 with mimeType or path to local file
    };

    await Share.open(shareOptions);

    navigation.navigate('Home');
  }, [navigation]);

  const LeftAction: React.FC = ({children}) => {
    return (
      <ItemButton
        onPress={() => {
          handleDeletaDocumento(children);
        }}>
        <ItemButtonText name="trash-2" size={22} color="#fff" />
      </ItemButton>
    );
  };

  // const LeftActionKinshp: React.FC = () => {
  //   return (
  //     <ItemButtonKinship>
  //       <ItemButtonText name="trash-2" size={22} color="#fff" />
  //     </ItemButtonKinship>
  //   );
  // };

  if (loading) {
    return <Load />;
  }

  return (
    <>
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
              <KeyboardAvoidingView
                behavior="height"
                keyboardVerticalOffset={100}
                style={{width: '100%'}}>
                <ScrollView>
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
                        Nomeie e adicione a certidão para acompanhar o status e
                        o andamento do processo.
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
                            style={{
                              fontSize: 14,
                              fontFamily: 'Poppins-Regular',
                              padding: 10,
                            }}
                            placeholder="Adicionar notas
                      (Livro, Folha, Cartórios)"
                            placeholderTextColor="grey"
                            onChangeText={(text) => {
                              setTextArea(text);
                            }}
                            numberOfLines={4}
                            multiline
                          />
                        </TextAreaView>
                      </ContainerTextArea>
                    </ContainerInputs>
                  </BodyModal>
                  <FooterModal>
                    <ButtonContinua
                      activeOpacity={1}
                      onPress={handleAdicionaDocumentoChecklist}>
                      <ButtonText>Adicionar item ao checklist</ButtonText>
                    </ButtonContinua>
                  </FooterModal>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </View>
        </Modal>
        <ContainerHeader>
          <ContainerTitle>
            <Subtitle>Crie seu checklist</Subtitle>
            <Title>Emissões</Title>
          </ContainerTitle>
          <ButtonGerir
            onPress={() => {
              setEditing(!isediting);
            }}>
            <Gerir source={Geririmg} />
          </ButtonGerir>
        </ContainerHeader>
        <ContainerList>
          <ItemsList
            data={kinships}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item, index}) => (
              <>
                <Swipeable>
                  <ContainerListItem
                    onPress={() => {
                      handleAtualizaLista(item, index);
                    }}
                    style={{
                      borderBottomColor: '#efefef',
                      borderBottomWidth: 1,
                    }}>
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
                      {item.isVisibleGrid ? (
                        <IconList name="chevron-up" size={25} color="#f09d4c" />
                      ) : (
                        <IconList
                          name="chevron-down"
                          size={25}
                          color="#f09d4c"
                        />
                      )}
                    </ContainerIcon>
                  </ContainerListItem>
                </Swipeable>
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

                          <Swipeable
                            ref={(ref) => {
                              isediting ? ref?.openLeft() : ref?.close();
                            }}
                            activeOffsetX={[0, 1]}
                            overshootLeft={false}
                            renderLeftActions={() => (
                              <LeftAction>{item.DocumentId}</LeftAction>
                            )}>
                            <ContainerGrid>
                              <ContainerDescricao>
                                <Descricao>{item.DocumentName}</Descricao>
                              </ContainerDescricao>
                              <ContainerSwitch>
                                <Switch
                                  trackColor={{
                                    false: '#767577',
                                    true: '#32d5a0',
                                  }}
                                  thumbColor="#f4f3f4"
                                  style={{marginRight: 30}}
                                  value={item.IsRequired}
                                  onValueChange={(value) => {
                                    handleAtualizaIsRequired(item, value);
                                  }}
                                />
                                <Switch
                                  trackColor={{
                                    false: '#767577',
                                    true: '#32d5a0',
                                  }}
                                  thumbColor="#f4f3f4"
                                  value={item.IsCaught}
                                  onValueChange={(value) => {
                                    handleAtualizaIsCaught(item, value);
                                  }}
                                />
                              </ContainerSwitch>
                            </ContainerGrid>
                          </Swipeable>
                        </>
                      )}
                    />
                    <AddDocs
                      onPress={() => {
                        handleAdiconaDocumento(item.ParentId);
                      }}>
                      <IconList name="plus-circle" size={20} color="#f09d4c" />
                      <AddDocsText>Adicionar certidão</AddDocsText>
                    </AddDocs>
                  </ContainerListGrid>
                ) : (
                  <></>
                )}
              </>
            )}
          />
        </ContainerList>
        <ButtonContinua onPress={handleGeraRelatorio}>
          <ButtonText>Gerar relatório completo</ButtonText>
        </ButtonContinua>
        <ButtonFechar
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <ButtonTextFechar>Fechar</ButtonTextFechar>
        </ButtonFechar>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
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
    marginTop: RFValue(290),
    height: RFValue(690),
    width: '100%',
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
