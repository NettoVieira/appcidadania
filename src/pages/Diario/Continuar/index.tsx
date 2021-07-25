/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
import React, {useCallback, useState} from 'react';

import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {compareAsc, format} from 'date-fns';
import Input from '../../../Components/react-native-input-style/input/Input';
import Load from '../../../Components/Loading';

import {
  Container,
  ContainerHeader,
  Title,
  Actions,
  Valor,
  ButtonEdit,
  ButtonImage,
  Body,
  Description,
  BodyModal,
  ButtonClose,
  ButtonContinua,
  ButtonText,
  ContainerInputs,
  ContainerTextModal,
  FooterModal,
  HeaderModal,
  IconClose,
  Modal,
  Subtitle,
} from './styles';

import EditarValorimg from '../../../assets/editarvalor.png';
import api from '../../../services/api';

export interface List {
  id: string;
  token_device: string;
  created: string;
  name: string;
  description: string;
}

const Continuar: React.FC = ({route}: any) => {
  const navigation = useNavigation();

  const [items, _] = useState<List>(route.params.item);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(route.params.item.name);
  const [data, setData] = useState<number>(route.params.item.created);
  const [loading, setLoading] = useState(false);
  const [descricao, setDescricao] = useState(route.params.item.description);

  const handleAdicionaCusto = useCallback(async () => {
    setLoading(true);
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const req = JSON.parse(Items[1] || '{}');

    try {
      const params = {
        Token: req.Request.Token,
        TokenDevice: req.Request.TokenDevice,
        Id: items.id,
        Name: name,
        Created: data,
        Description: descricao,
      };

      await api.post('dailyUpdate', params);

      setModalVisible(false);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
    }
  }, [items.id, name, data, descricao, navigation]);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <KeyboardAvoidingView
              behavior="height"
              keyboardVerticalOffset={100}
              style={{width: '100%'}}>
              <ScrollView style={{height: '100%'}}>
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
                      label="Data"
                      keyboardType="default"
                      labelStyle={{
                        fontFamily: 'Poppins-Regular',
                        color: '#b2b2b2',
                      }}
                      onInputChange={(item: any) => {
                        setName(item);
                      }}
                      contain=""
                      initialValue={format(
                        new Date(items.created),
                        'dd MMM yyyy',
                      )}
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
                        setData(item);
                      }}
                      initialValue={items.name}
                      contain=""
                      value=""
                      outlined
                      borderColor="#f09d4c"
                    />

                    <Input
                      id="notas"
                      inputStyle={{height: 80, marginTop: 10}}
                      label="Adicionar notas"
                      labelStyle={{
                        fontFamily: 'Poppins-Regular',
                        color: '#b2b2b2',
                      }}
                      keyboardType="default"
                      onInputChange={(item: any) => {
                        setDescricao(item);
                      }}
                      contain=""
                      initialValue={items.description}
                      value=""
                      outlined
                      borderColor="#f09d4c"
                    />
                  </ContainerInputs>
                </BodyModal>
                <FooterModal>
                  <ButtonContinua onPress={handleAdicionaCusto}>
                    <ButtonText>Adicionar custo</ButtonText>
                  </ButtonContinua>
                </FooterModal>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>

      <ContainerHeader>
        <Title>{items.name}</Title>
        <Actions>
          <Valor>{format(new Date(items.created), 'dd MMM yyyy')}</Valor>
          <ButtonEdit
            onPress={() => {
              setModalVisible(true);
            }}>
            <ButtonImage source={EditarValorimg} />
          </ButtonEdit>
        </Actions>
      </ContainerHeader>
      <Body>
        <Description>{items.description}</Description>
      </Body>
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
    height: 640,
    width: 360,
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

export default Continuar;
