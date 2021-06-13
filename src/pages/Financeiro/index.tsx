/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable @typescript-eslint/no-use-before-define */

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {View, Alert, StyleSheet} from 'react-native';
import api from '../../services/api';
import IconSifrao from '../../assets/sifrao.png';
import Banner from '../../Components/Banner';

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
  ItemsList,
  ListFinances,
  ContainerList,
  ContainerListHeader,
  TitleFinances,
  ValueFinances,
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
  TextAreaInput,
  TextAreaView,
  ContainerTextArea,
  FooterModal,
  ButtonContinua,
  ButtonText,
} from './styles';
import Input from '../../Components/react-native-input-style/input/Input';

interface Finance {
  List: List[];
  Total: number;
}

export interface List {
  description: string;
  id: number;
  name: string;
  value: number;
}

const Financeiro: React.FC = () => {
  const [finance, setFinance] = useState<Finance>();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    async function getItem() {
      const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
      const req = JSON.parse(Items[1] || '{}');

      const params = {
        Token: req.Request.Token,
        TokenDevice: req.Request.TokenDevice,
      };

      const res = await api.post('financeList', params);

      setFinance(res.data.Finance);
    }

    getItem();
  }, []);

  return (
    <>
      <Container>
        <Modal
          animationType="slide"
          statusBarTranslucent
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(false);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
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
                  <Title>Adicionar custo</Title>
                  <Subtitle>
                    Nomeie o motivo do custo para acompanhar seu controle
                    financeiro no andamento do processo.
                  </Subtitle>
                </ContainerTextModal>
                <ContainerInputs>
                  <Input
                    id="name"
                    label="Tipo decusto"
                    keyboardType="default"
                    labelStyle={{
                      fontFamily: 'Poppins-Regular',
                      color: '#b2b2b2',
                    }}
                    onInputChange={(item: any) => {
                      console.log(item);
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
                    label="Adicionar notas"
                    labelStyle={{
                      fontFamily: 'Poppins-Regular',
                      color: '#b2b2b2',
                    }}
                    keyboardType="default"
                    onInputChange={(item: any) => {
                      console.log(item);
                    }}
                    contain=""
                    initialValue=""
                    value=""
                    outlined
                    borderColor="#f09d4c"
                  />

                  <Input
                    id="valor"
                    inputStyle={{height: 80, marginTop: 10}}
                    label="Valor"
                    labelStyle={{
                      fontFamily: 'Poppins-Regular',
                      color: '#b2b2b2',
                    }}
                    keyboardType="default"
                    onInputChange={(item: any) => {
                      console.log(item);
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
                <ButtonContinua>
                  <ButtonText>Adicionar custo</ButtonText>
                </ButtonContinua>
              </FooterModal>
            </View>
          </View>
        </Modal>
        <Header>
          <ContainerCusto>
            <ContainerIcon>
              <Icon source={IconSifrao} />
            </ContainerIcon>
            <ContainerText>
              <DescCusto>Custo total até agora</DescCusto>
              <Valor>
                R$
                {finance?.Total}
              </Valor>
            </ContainerText>
          </ContainerCusto>
        </Header>
        <Body>
          <ContainerTitle>
            <Subtitle>Crie seu checklist</Subtitle>
            <Title>Financeiro</Title>
          </ContainerTitle>
          <ListFinances>
            <ItemsList
              data={finance?.List}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => (
                <ContainerList>
                  <ContainerListHeader>
                    <TitleFinances>{item.name}</TitleFinances>
                    <ValueFinances>
                      R$
                      {item.value}
                    </ValueFinances>
                  </ContainerListHeader>
                  <Description>{item.description}</Description>
                  <Continue>
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
              <AddDocsText>Adicionar novo custo</AddDocsText>
            </AddDocs>
          </ListFinances>
        </Body>
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

export default Financeiro;
