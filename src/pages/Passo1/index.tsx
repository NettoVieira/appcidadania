/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Modal, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Feather';

import IconPlan from '../../assets/svg/Passo1/icon_ic_sys_planb.svg';
import Iconwork from '../../assets/svg/Passo1/icon_ic_sys_trabalho.svg';
import IconTrabalho from '../../assets/svg/Passo1/icon_ic_sys_emprego.svg';
import Iconensino from '../../assets/svg/Passo1/icon_ic_sys_ensino.svg';
import Iconbeneficios from '../../assets/svg/Passo1/icon_ic_sys_beneficios.svg';
import Iconviagens from '../../assets/svg/Passo1/icon_ic_sys_viagens.svg';
import Iconheranca from '../../assets/svg/Passo1/icon_ic_sys_heranca.svg';
import Iconaposentadoria from '../../assets/svg/Passo1/icon_ic_sys_aposentar.svg';

import api from '../../services/api';
import Load from '../../Components/Loading';
import BackgroundImg from '../../assets/group_240.png';
import Animacao from '../../assets/Animacoes/lf30_kp7vtd6i.json';

import CloseImage from '../../assets/Close.png';

import {
  Container,
  Title,
  Scroll,
  ContainerTitle,
  SubTitle,
  Paragraph,
  GoBack,
  GoBackIcon,
  Text,
  Button,
  ButtonImg,
  ButtonContinua,
  ButtonText,
  StatusPendente,
  StatusConcluido,
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
  ContainerAction,
  ContainerButton,
  Action,
  ActionImage,
  ActionSubText,
  ActionText,
  ActionTextIcon,
  ContainerActionText,
  ContainerOptions,
  ImageLapis,
} from './styles';

interface Steps extends Object {
  Name: string;
  Description: string;
  Status: number;
  StartTime: string;
  EndTime: string;
  Task1: {
    Name: string;
    Status: number;
    StartTime: string;
    EndTime: string;
  };
  Task2: {
    Name: string;
    Status: number;
    StartTime: string;
    EndTime: string;
  };
  Task3: {
    Name: string;
    Status: number;
    StartTime: string;
    EndTime: string;
  };
}

const Passo1: React.FC = () => {
  const navigation = useNavigation();
  const [step, setStep] = useState<Steps>();
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function getItems() {
        const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
        const req = JSON.parse(Items[1] || '{}');

        const data = {
          Token: req.Request.Token,
          TokenDevice: req.Request.TokenDevice,
        };
        try {
          const res = await api.post('getUser', data);
          setStep(res.data.User.Step1);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      getItems();
    }, []),
  );

  const handleIntroducao = useCallback(() => {
    navigation.navigate('Introducao', {introducao: 'Introducao'});
  }, [navigation]);

  const handleConcluirEtapa = useCallback(async () => {
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const {Request, User} = JSON.parse(Items[1] || '{}');

    const data = {
      Token: Request.Token,
      TokenDevice: Request.TokenDevice,
      Name: User.Name,
      Step: 1,
      Task: 0,
      Status: 2,
    };

    try {
      await api.post('updateUser', data);

      setModalVisible(true);
    } catch (err) {
      console.log(err);
    }
  }, [navigation]);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <Modal
        animationType="slide"
        statusBarTranslucent
        transparent
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ContainerImage>
              <Backgroudimg source={BackgroundImg} />
              <ContainerAnimacao>
                <LottieView
                  source={Animacao}
                  autoPlay
                  loop
                  style={{marginLeft: 25}}
                />
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
      <Scroll>
        <ContainerTitle>
          <Title>{step?.Name}</Title>
        </ContainerTitle>
        <SubTitle>{step?.Description}</SubTitle>
        <Paragraph>
          A nacionalidade na Itália é regida pelo princípio do jus sanguinis.
          Deixe-me simplificar: é italiano aquele que é descendente de um
          Italiano. Se você sabe que tem um ascendente nascido na Itália, ou já
          ouviu alguma tia dizer que se lembra de “ouvir vovô falar que o pai
          dele tinha vindo da Itália”, então este App foi feito pra você.
        </Paragraph>

        <GoBack onPress={handleIntroducao}>
          <ContainerAction>
            <Text>Ler introdução completa</Text>
            <GoBackIcon name="chevron-right" size={25} color="#db822b" />
          </ContainerAction>
          {step?.Task1.Status !== 2 ? (
            <StatusPendente>Pendente</StatusPendente>
          ) : (
            <StatusConcluido>Concluido</StatusConcluido>
          )}
        </GoBack>

        <SubTitle>Como "pedir a cidadania italiana"</SubTitle>
        <Paragraph>
          Vamos lá, outro mito que deve ser quebrado. Se você é descendente de
          cidadão italiano, não tem essa de pedir, ela já é sua, o direito é de
          sangue “jus sanguinis” lembra? O que você precisa fazer é apenas
          reconhecê-la perante as autoridades italianas. Quando você finalizar o
          seu procedimento de reconhecimento, você tanto será considerado
          italiano, que terá sua certidão de nascimento transcrita para o
          italiano nos livros do Registro Civil na Itália, olha que legal!
        </Paragraph>

        <SubTitle>Como "pedir a cidadania italiana"</SubTitle>
        <Paragraph>
          Você agora já sabe, não tem mágica, você precisa comprovar a sua
          origem italiana através de documentos de registro civil ou
          eclesiásticos que provem sua linha genealógica. Calma, Aqui no APP te
          darei o caminho das pedras.
        </Paragraph>

        <SubTitle>Antes de iniciarmos, deixa eu te animar um pouco!</SubTitle>
        <Paragraph>
          Ter sua cidadania reconhecida pode e trará muitos benefícios pra você,
          e se tiver filhos ou pretende ter, para eles também. Vou listar alguns
          aqui pra te dar uma ideia:
        </Paragraph>

        <ContainerButton>
          <Action
            onPress={() => {
              navigation.navigate('Planob');
            }}>
            <IconPlan
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Ter sempre um plano B</ActionText>
              <ActionSubText>
                Escolha entre os 27 países da União Europeia pra iniciar uma
                vida nova.
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>

          <Action
            onPress={() => {
              navigation.navigate('Oportunidade');
            }}>
            <Iconwork
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Oportunidade de trabalho</ActionText>
              <ActionSubText>
                Tenha mais chance de trabalho sem se desgastar com pedidos e
                renovações de vistos, ou permissões especiais.
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>

          <Action
            onPress={() => {
              navigation.navigate('Emprego');
            }}>
            <IconTrabalho
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Emprego e benefícios sociais</ActionText>
              <ActionSubText>
                Você poderá reinvidicar seus direitos como qualquer outro
                Europeu.
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>

          <Action
            onPress={() => {
              navigation.navigate('Ensino');
            }}>
            <Iconensino
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Ensino de baixo custo e alta qualidade</ActionText>
              <ActionSubText>
                Ensino gratuito em instituições na Itália ou em qualquer país da
                União Europeia.
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>

          <Action
            onPress={() => {
              navigation.navigate('Beneficios');
            }}>
            <Iconbeneficios
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Benefícios culturais</ActionText>
              <ActionSubText>
                Ampla variedade de programas para intercâmbios e experiências
                culturais
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>

          <Action
            onPress={() => {
              navigation.navigate('Facilidade');
            }}>
            <Iconviagens
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Facilidade em viagens</ActionText>
              <ActionSubText>
                Cidadãos italianos podem viajar sem visto para 127 países ao
                redor do globo.
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>

          <Action
            onPress={() => {
              navigation.navigate('Heranca');
            }}>
            <Iconheranca
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Herança para descendentes</ActionText>
              <ActionSubText>
                Todos estes benefícios se estenderão aos seus descendentes.
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>

          <Action
            onPress={() => {
              navigation.navigate('Aposentadoria');
            }}>
            <Iconaposentadoria
              width={RFValue(25)}
              height={RFValue(25)}
              style={{marginRight: RFValue(8)}}
            />
            <ContainerActionText>
              <ActionText>Aposentadoria</ActionText>
              <ActionSubText>
                Você poderá pendurar as chuteiras no país europeu que escolher.
              </ActionSubText>
            </ContainerActionText>
            <Icon
              name="chevron-right"
              size={38}
              color="#f09d4c"
              style={{marginLeft: 15}}
            />
          </Action>
        </ContainerButton>

        <SubTitle>
          Antes de você iniciar os passos práticos: que tal esclarecermos alguns
          mitos?
        </SubTitle>
        <GoBack
          onPress={() => {
            navigation.navigate('Mitos');
          }}>
          <ContainerAction>
            <Text>Entenda os principais mitos</Text>
            <GoBackIcon name="chevron-right" size={25} color="#db822b" />
          </ContainerAction>
          {step?.Task3.Status !== 2 ? (
            <StatusPendente>Pendente</StatusPendente>
          ) : (
            <StatusConcluido>Concluido</StatusConcluido>
          )}
        </GoBack>

        <ButtonContinua onPress={handleConcluirEtapa}>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </Scroll>
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
    marginTop: RFValue(160),
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
});

export default Passo1;
