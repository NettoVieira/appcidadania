/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// eslint-disable-next-line react/jsx-one-expression-per-line
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Modal, StyleSheet, View} from 'react-native';
import BackgroundImg from '../../assets/group_240.png';
import ModalImage from '../../assets/modal-image.png';
import CloseImage from '../../assets/Close.png';

import {
  Container,
  Title,
  SubTitle,
  TitleOpacity,
  ContainerHeader,
  Paragraph,
  ContainerOptions,
  ButtonContinua,
  ButtonText,
  Backgroudimg,
  ImageLapis,
  ContainerImage,
  Close,
  CloseText,
  ModalTitle,
  ParagraphModal,
  ContainerBodyModal,
  ButtonContinuaModal,
  ButtonTextModal,
} from './styles';

const Passo2: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSobeModal = useCallback(() => {
    setModalVisible(true);
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
              <Close
                onPress={() => {
                  setModalVisible(false);
                }}>
                <CloseText source={CloseImage} />
              </Close>
              <ImageLapis source={ModalImage} />
            </ContainerImage>
            <ContainerBodyModal>
              <ModalTitle>Não se preocupe, a gente te ajuda.</ModalTitle>
              <ParagraphModal>
                Textos para cada situação anterior apresentada. Podemos iniciar
                uma breve explicação e mandar para os textos específicos de cada
                item anterior de perfil.
              </ParagraphModal>
              <ButtonContinuaModal
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Direito');
                }}>
                <ButtonTextModal>Continuar</ButtonTextModal>
              </ButtonContinuaModal>
            </ContainerBodyModal>
          </View>
        </View>
      </Modal>
      <Title>Tenho direito a cidadanida italiana?</Title>
      <TitleOpacity>Saiba como definir</TitleOpacity>
      <ContainerHeader>
        <SubTitle>
          Selecione a opção que mais se encaixa com o seu perfil
        </SubTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          maximus molestie blandit. Vestibulum at laoreet elit. Ut tristique
          orci sed metus aliquam, at consequat est interdum. Mauris ultricies
          era.
        </Paragraph>
      </ContainerHeader>
      <ContainerOptions>
        <ButtonContinua onPress={handleSobeModal}>
          <ButtonText>Não faço ideia, mas quero saber.</ButtonText>
        </ButtonContinua>
        <ButtonContinua onPress={handleSobeModal}>
          <ButtonText>
            Sei que tenho, mas não sei onde estão os documentos.
          </ButtonText>
        </ButtonContinua>
        <ButtonContinua onPress={handleSobeModal}>
          <ButtonText>
            Sei que tenho e já tenho quase todos os documentos.
          </ButtonText>
        </ButtonContinua>
        <ButtonContinua onPress={handleSobeModal}>
          <ButtonText>Sei que tenho e já tenho tudo pronto.</ButtonText>
        </ButtonContinua>
      </ContainerOptions>
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

export default Passo2;
