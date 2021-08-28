/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ModalProps,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Input from '../../../../Components/react-native-input-style/input/Input';

import {
  Title,
  Subtitle,
  ButtonContinua,
  ButtonText,
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
} from '../styles';

const Modaladdname: React.FC<ModalProps> = ({visible, ...rest}) => {
  console.log(visible);

  const [modalVisible, setModalVisible] = useState<boolean>(visible || false);
  return (
    <Modal
      {...rest}
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
                  <Title>Adicionar nome</Title>
                  <Subtitle>
                    Adicione o nome do familiar e organize seu checklist
                  </Subtitle>
                </ContainerTextModal>
                <ContainerInputs>
                  <Input
                    id="name"
                    label="Nome do familiar"
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
                <ButtonContinua activeOpacity={1}>
                  <ButtonText>Adicionar item ao checklist</ButtonText>
                </ButtonContinua>
              </FooterModal>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </Modal>
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
    marginTop: RFValue(340),
    height: RFValue(400),
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

export default Modaladdname;
