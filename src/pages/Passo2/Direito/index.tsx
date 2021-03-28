/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Modal, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Coracao from '../../../assets/coracao.png';
import BackgroundImg from '../../../assets/group_240.png';
import Animacao from '../../../assets/Animacoes/lf30_kp7vtd6i.json';

import CloseImage from '../../../assets/Close.png';

import {
  Container,
  Title,
  ContainerHeader,
  ContainerBody,
  Paragraph,
  ContainerFooter,
  TitleOpacity,
  ButtonContinua,
  ButtonText,
  Backgroudimg,
  ContainerImage,
  Close,
  CloseText,
  ModalTitle,
  ParagraphModal,
  ContainerBodyModal,
  ButtonContinuaModal,
  ButtonTextModal,
  ContainerAnimacao,
} from './styles';
import {Subtitle} from '../../Passo1/Planob/styles';
import api from '../../../services/api';

const Direito: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleConcluirEtapa = useCallback(async () => {
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const {Request, User} = JSON.parse(Items[1] || '{}');

    const data = {
      Token: Request.Token,
      TokenDevice: Request.TokenDevice,
      Name: User.Name,
      Step: 2,
      Task: 0,
      Status: 2,
    };

    try {
      await api.post('updateUser', data);

      setModalVisible(true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ContainerImage>
              <Backgroudimg source={BackgroundImg} />
              <ContainerAnimacao>
                <LottieView source={Animacao} autoPlay loop />
              </ContainerAnimacao>
              <Close
                onPress={() => {
                  setModalVisible(false);
                }}>
                <CloseText source={CloseImage} />
              </Close>
            </ContainerImage>
            <ContainerBodyModal>
              <ModalTitle>Etapa concluída.</ModalTitle>
              <ParagraphModal>
                Agora que você já entende um pouco mais sobre a cidadania
                italiana e seus benefícios, vamos juntos para a próxima etapa?
              </ParagraphModal>
              <ButtonContinuaModal
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Dashboardroutes');
                }}>
                <ButtonTextModal>Continuar</ButtonTextModal>
              </ButtonContinuaModal>
            </ContainerBodyModal>
          </View>
        </View>
      </Modal>
      <ContainerHeader>
        <TitleOpacity>Cidadania italiana</TitleOpacity>
        <Title>Tenho direito?</Title>
      </ContainerHeader>
      <ContainerBody>
        <Subtitle>Não faço ideia, mas quero saber.</Subtitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          velit nisl. Pellentesque ornare sed urna a elementum. In condimentum
          ipsum sed malesuada placerat. Mauris at lorem feugiat, pharetra est
          vitae, efficitur nulla. Maecenas accumsan ullamcorper nulla vitae
          pellentesque. Proin cursus nisi nunc, nec convallis magna hendrerit
          quis. Duis bibendum odio ac pulvinar laoreet. Praesent euismod dolor
          ut ultricies pharetra.
        </Paragraph>
      </ContainerBody>
      <ContainerFooter>
        <ButtonContinua onPress={handleConcluirEtapa}>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </ContainerFooter>
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
    marginTop: 160,
    height: 640,
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

export default Direito;
