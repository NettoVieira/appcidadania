/* eslint-disable radix */
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
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Share from 'react-native-share';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

import api from '../../services/api';
import IconSifrao from '../../assets/sifrao.png';
import ListDisable from '../../assets/svg/illustration_img_list_disable.svg';
import Banner from '../../Components/Banner';
import Load from '../../Components/Loading';

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
  ContainerEmptyList,
  TitleEmpty,
  SubtitleEmpty,
  ContainerFooter,
} from './styles';

import Input from '../../Components/react-native-input-style/input/Input';

import {maskCurrency} from '../../utils/masks';

import Geririmg from '../../assets/gerir_enable.png';
import IconMoney from '../../assets/svg/icon_money.svg';

interface Finance {
  Total: number;
  List: List[];
}

export interface List {
  description: string;
  id: number;
  name: string;
  value: number;
}

const Financeiro: React.FC = () => {
  const navigation = useNavigation();

  const [finance, setFinance] = useState<Finance>();
  const [modalVisible, setModalVisible] = useState(false);
  const [custo, setCusto] = useState();
  const [valor, setValor] = useState<string>('');
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
          const res = await api.post('financeList', params);

          setFinance(res.data.Finance);
          setValor('');
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
      Name: custo,
      Value: parseFloat(valor.replace('.', '').replace(',', '.')),
      Description: descricao,
    };

    try {
      const response = await api.post('financeAdd', params);

      setFinance(response.data.Finance);
      setModalVisible(false);
      setValor('');
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [custo, descricao, valor]);

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
      const response = await api.post('financeDelete', params);

      setFinance(response.data.Finance);
      setModalVisible(false);
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

      const response = await api.post('financeExport', params);

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
                      <Title>Adicionar custo</Title>
                      <Subtitle>
                        Nomeie o motivo do custo para acompanhar seu controle
                        financeiro no andamento do processo.
                      </Subtitle>
                    </ContainerTextModal>
                    <ContainerInputs>
                      <Input
                        id="name"
                        inputStyle={{height: 45}}
                        label="Tipo de custo"
                        keyboardType="default"
                        onInputChange={(item: any) => {
                          setCusto(item);
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
                        label="Valor"
                        inputStyle={{height: 45}}
                        keyboardType="number-pad"
                        onInputChange={(item: any) => {
                          const value = maskCurrency(item);

                          setValor(value);
                        }}
                        contain=""
                        initialValue=""
                        value={valor}
                        outlined
                        borderColor="#f09d4c"
                      />

                      <Input
                        id="notas"
                        inputStyle={{height: 80, marginTop: 6}}
                        label="Adicionar notas"
                        keyboardType="default"
                        onInputChange={(item: any) => {
                          setDescricao(item);
                        }}
                        contain=""
                        initialValue=""
                        multiline
                        numberOfLines={4}
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
        <Header>
          <ContainerCusto>
            <ContainerIcon>
              <IconMoney width={40} height={40} />
            </ContainerIcon>
            <ContainerText>
              <DescCusto>Custo total até agora</DescCusto>
              <Valor>
                R$
                {finance?.Total.toFixed(2).replace('.', ',')}
              </Valor>
            </ContainerText>
          </ContainerCusto>
        </Header>
        <Body>
          <Bodyheader>
            <ContainerTitle>
              <Title>Financeiro</Title>
            </ContainerTitle>
            <ButtonGerir
              onPress={() => {
                // eslint-disable-next-line no-unused-expressions
                isEditing ? setEditing(false) : setEditing(true);
              }}>
              <Gerir source={Geririmg} />
            </ButtonGerir>
          </Bodyheader>
          <ListFinances>
            {finance?.List[0] ? (
              <ItemsList
                data={finance?.List}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => (
                  <ContainerList
                    ref={(ref) => {
                      isEditing ? ref?.openLeft() : ref?.close();
                    }}
                    renderLeftActions={() => {
                      return <LeftActionKinshp>{item}</LeftActionKinshp>;
                    }}>
                    <ContainerListHeader>
                      <TitleFinances>{item.name}</TitleFinances>
                      <ValueFinances>
                        R$
                        {item.value
                          ? item.value.toFixed(2).replace('.', ',')
                          : 0}
                      </ValueFinances>
                    </ContainerListHeader>
                    <Description>{item.description}</Description>
                    <Continue
                      onPress={() => {
                        navigation.navigate('Continuar', {
                          item,
                          valor: item.value
                            ? item.value.toFixed(2).replace('.', ',')
                            : 0,
                        });
                      }}>
                      <ContinueText>Continuar lendo</ContinueText>
                    </Continue>
                  </ContainerList>
                )}
              />
            ) : (
              <ContainerEmptyList>
                <ListDisable />
                <TitleEmpty>Nenhum custo cadastrado</TitleEmpty>
                <SubtitleEmpty>
                  Cadastre agora mesmo e tenha o gerenciamento dos seus custos
                  durante todo o processo.
                </SubtitleEmpty>
              </ContainerEmptyList>
            )}
          </ListFinances>
          <ContainerFooter>
            {/* <AddDocs
              onPress={() => {
                setModalVisible(true);
              }}>
              <IconList name="plus-circle" size={20} color="#f09d4c" />
              <AddDocsText>Adicionar novo custo</AddDocsText>
            </AddDocs> */}
            <ButtonContinue
              onPress={() => {
                setModalVisible(true);
              }}>
              <ButtonContinueText>Adicionar</ButtonContinueText>
            </ButtonContinue>
            <ButtonContinue onPress={handleCompartilharPdf}>
              <ButtonContinueText>Compartilhar</ButtonContinueText>
            </ButtonContinue>
          </ContainerFooter>
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

export default Financeiro;
