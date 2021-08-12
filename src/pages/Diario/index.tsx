/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-expressions */

import React, {useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Share from 'react-native-share';

import {RFValue} from 'react-native-responsive-fontsize';
import api from '../../services/api';
import Banner from '../../Components/Banner';
import Load from '../../Components/Loading';

import {
  Container,
  Title,
  Header,
  Body,
  ContainerTitle,
  Subtitle,
  AddDocs,
  IconList,
  AddDocsText,
  ItemsList,
  ListFinances,
  ContainerList,
  ContainerListHeader,
  TitleFinances,
  Description,
  Continue,
  ContinueText,
  Modal,
  HeaderModal,
  ButtonClose,
  IconClose,
  ContainerTextModal,
  BodyModal,
  ContainerInputs,
  FooterModal,
  ButtonContinua,
  ButtonText,
  Bodyheader,
  ButtonGerir,
  Gerir,
  ItemButtonKinship,
  ItemButtonText,
  ButtonContinue,
  ButtonContinueText,
  ListEmptyImage,
  SubtitleEmpty,
  TitleEmpty,
  ContainerEmpty,
} from './styles';

import Input from '../../Components/react-native-input-style/input/Input';

import Consultingdisable from '../../assets/svg/illustration_img_consulting_disable.svg';
import Geririmg from '../../assets/gerir_enable.png';

export interface List {
  id: string;
  token_device: string;
  created: string;
  name: string;
  description: string;
}

const Financeiro: React.FC = () => {
  const navigation = useNavigation();

  const [list, setList] = useState<List[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState();
  const [titulo, setTitulo] = useState<number>();
  const [descricao, setDescricao] = useState();
  const [loading, setLoading] = useState(false);
  const [isEditing, setEditing] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function getItem() {
        setLoading(true);
        const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
        const req = JSON.parse(Items[1] || '{}');

        const params = {
          Token: req.Request.Token,
          TokenDevice: req.Request.TokenDevice,
        };

        try {
          const res = await api.post('dailyList', params);

          setList(res.data.Daily.List);

          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }

      getItem();
    }, []),
  );

  const handleAdicionaCusto = useCallback(async () => {
    setLoading(true);
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const req = JSON.parse(Items[1] || '{}');

    const params = {
      Token: req.Request.Token,
      TokenDevice: req.Request.TokenDevice,
      Created: data,
      Name: titulo,
      Description: descricao,
    };

    try {
      const response = await api.post('dailyAdd', params);

      setList(response.data.Daily.List);
      setModalVisible(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [data, descricao, titulo]);

  const handleDeletaCusto = useCallback(async (item: any) => {
    setLoading(true);
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const req = JSON.parse(Items[1] || '{}');

    const params = {
      Token: req.Request.Token,
      TokenDevice: req.Request.TokenDevice,
      Id: item.id,
    };

    try {
      const response = await api.post('dailyDelete', params);

      setList(response.data.Daily.List);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const handleCompartilharPdf = useCallback(async () => {
    try {
      const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
      const req = JSON.parse(Items[1] || '{}');

      const params = {
        Token: req.Request.Token,
        TokenDevice: req.Request.TokenDevice,
      };

      const response = await api.post('dailyExport', params);

      const shareOptions = {
        title: 'Vim do appcidadania',
        failOnCancel: false,
        saveToFiles: true,
        url: `data:application/pdf;base64,${response.data.pdf}`, // base64 with mimeType or path to local file
      };

      await Share.open(shareOptions);
    } catch (error) {
      Alert.alert('Erro', `${error}`);
    }
  }, []);

  const LeftActionKinshp: React.FC = ({children}) => {
    return (
      <ItemButtonKinship onPress={() => handleDeletaCusto(children)}>
        <ItemButtonText name="trash-2" size={22} color="#fff" />
      </ItemButtonKinship>
    );
  };

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
          visible={modalVisible}>
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
                        setModalVisible(false);
                      }}>
                      <IconClose name="x" size={45} color="#f09d4c" />
                    </ButtonClose>
                  </HeaderModal>
                  <BodyModal>
                    <ContainerTextModal>
                      <Title>Adicionar nota</Title>
                      <Subtitle>
                        Crie seu diário da cidadania registrando cada etapa do
                        processo de requisição da sua cidadania.
                      </Subtitle>
                    </ContainerTextModal>
                    <ContainerInputs>
                      <Input
                        id="name"
                        label="Data"
                        keyboardType="default"
                        labelStyle={{
                          fontFamily: 'Poppins-Regular',
                          color: '#b2b2b2',
                        }}
                        onInputChange={(item: any) => {
                          setData(item);
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
                      <Input
                        id="valor"
                        label="Titulo da nota"
                        labelStyle={{
                          fontFamily: 'Poppins-Regular',
                          color: '#b2b2b2',
                        }}
                        keyboardType="default"
                        onInputChange={(item: any) => {
                          setTitulo(item);
                        }}
                        contain=""
                        initialValue=""
                        value=""
                        outlined
                        borderColor="#f09d4c"
                      />

                      <Input
                        id="notas"
                        inputStyle={{height: 170, marginTop: 10}}
                        label="Descrição da nota"
                        labelStyle={{
                          fontFamily: 'Poppins-Regular',
                          color: '#b2b2b2',
                        }}
                        keyboardType="default"
                        onInputChange={(item: any) => {
                          setDescricao(item);
                        }}
                        contain=""
                        initialValue=""
                        value=""
                        outlined
                        borderColor="#f09d4c"
                      />
                    </ContainerInputs>
                  </BodyModal>

                  <FooterModal>
                    <ButtonContinua onPress={handleAdicionaCusto}>
                      <ButtonText>Adicionar nota</ButtonText>
                    </ButtonContinua>
                  </FooterModal>
                </ScrollView>
              </KeyboardAvoidingView>
            </View>
          </View>
        </Modal>
        <Header />
        <Body>
          <Bodyheader>
            <ContainerTitle>
              <Subtitle>Crie suas notas</Subtitle>
              <Title>Histórico</Title>
            </ContainerTitle>
            <ButtonGerir
              onPress={() => {
                // eslint-disable-next-line no-unused-expressions
                isEditing ? setEditing(false) : setEditing(true);
              }}>
              <Gerir source={Geririmg} />
            </ButtonGerir>
          </Bodyheader>
          {list[0] ? (
            <ListFinances>
              <ItemsList
                data={list}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                  <ContainerList
                    ref={(ref) => {
                      isEditing ? ref?.openLeft() : ref?.close();
                    }}
                    activeOffsetX={[0, 1]}
                    renderLeftActions={() => {
                      return <LeftActionKinshp>{item}</LeftActionKinshp>;
                    }}>
                    <ContainerListHeader>
                      <TitleFinances>{item.name}</TitleFinances>
                    </ContainerListHeader>
                    <Description>{item.description}</Description>
                    <Continue
                      onPress={() => {
                        navigation.navigate('ContinuarDiario', {item});
                      }}>
                      <ContinueText>Continuar lendo</ContinueText>
                    </Continue>
                  </ContainerList>
                )}
              />

              <AddDocs
                onPress={() => {
                  setModalVisible(true);
                }}>
                <IconList name="plus-circle" size={20} color="#f09d4c" />
                <AddDocsText>Adicionar nova nota</AddDocsText>
              </AddDocs>
            </ListFinances>
          ) : (
            <ContainerEmpty>
              <ListFinances style={{marginBottom: 130}}>
                <AddDocs
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <IconList name="plus-circle" size={20} color="#f09d4c" />
                  <AddDocsText>Adicionar novo custo</AddDocsText>
                </AddDocs>
              </ListFinances>
              <Consultingdisable />
              <TitleEmpty>Nenhum nota cadastrada</TitleEmpty>
              <SubtitleEmpty>
                Cadastre agora mesmo e tenha o histórico de todo o processo,
                como um diário.
              </SubtitleEmpty>
            </ContainerEmpty>
          )}
        </Body>
      </Container>
      <ButtonContinue onPress={handleCompartilharPdf}>
        <ButtonContinueText>Compartilhar</ButtonContinueText>
      </ButtonContinue>
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
    paddingLeft: 16,
    paddingRight: 16,
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

export default Financeiro;
