/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/prop-types */
import React, {useCallback, useState} from 'react';

import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {RFPercentage} from 'react-native-responsive-fontsize';
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
import {maskCurrency} from '../../../utils/masks';
import routes from '../../../routes';

export interface List {
  description: string;
  id: number;
  name: string;
  value: number;
}

const Continuar: React.FC = ({route}: any) => {
  const navigation = useNavigation();

  console.log();

  const [items, _] = useState<List>(route.params.item);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState(route.params.item.name);
  const [valor, setValor] = useState<string>();
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
        Value: parseFloat(valor.replace('.', '').replace(',', '.')),
        Description: descricao,
      };

      await api.post('financeUpdate', params);

      setModalVisible(false);
      setLoading(false);
      navigation.navigate('Financeiro');
    } catch (error) {
      setLoading(false);
    }
  }, [items.id, name, valor, descricao, navigation]);

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
                    <Title>Editar custo</Title>
                    <Subtitle>
                      Nomeie o motivo do custo para acompanhar seu controle
                      financeiro no andamento do processo.
                    </Subtitle>
                  </ContainerTextModal>
                  <ContainerInputs>
                    <Input
                      id="name"
                      label="Tipo de custo"
                      keyboardType="default"
                      labelStyle={{
                        fontFamily: 'Poppins-Regular',
                        color: '#b2b2b2',
                      }}
                      onInputChange={(item: any) => {
                        setName(item);
                      }}
                      contain=""
                      initialValue={items.name}
                      value=""
                      outlined
                      borderColor="#f09d4c"
                    />
                    <Subtitle style={{marginLeft: 10}}>
                      Ex:. Certidão de casamento
                    </Subtitle>
                    <Input
                      id="valor"
                      label="Valor"
                      labelStyle={{
                        fontFamily: 'Poppins-Regular',
                        color: '#b2b2b2',
                      }}
                      inputStyle={{height: 45}}
                      keyboardType="number-pad"
                      onInputChange={(item: any) => {
                        const value = maskCurrency(item);

                        setValor(value);
                      }}
                      contain=""
                      initialValue={route.params.valor}
                      value={valor}
                      outlined
                      borderColor="#24211d"
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
                      multiline
                      numberOfLines={4}
                      initialValue={items.description}
                      value=""
                      outlined
                      borderColor="#f09d4c"
                    />
                  </ContainerInputs>
                </BodyModal>
                <FooterModal>
                  <ButtonContinua onPress={handleAdicionaCusto}>
                    <ButtonText>Salvar</ButtonText>
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
          <Valor>
            R$
            {items.value.toFixed(2).replace('.', ',')}
          </Valor>
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
    height: RFPercentage(120),
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

export default Continuar;
