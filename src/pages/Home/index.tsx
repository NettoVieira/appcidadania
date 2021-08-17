/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// eslint-disable-next-line react/jsx-one-expression-per-line
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {RFValue} from 'react-native-responsive-fontsize';
import DnaDisabled from '../../assets/svg/illustration_img_dna_disable.svg';
import DnaEnabled from '../../assets/svg/illustration_img_dna.svg';
import Consulting from '../../assets/svg/illustration_img_consulting.svg';
import ConsultingDisabled from '../../assets/svg/illustration_img_consulting_disable.svg';
import List from '../../assets/svg/illustration_img_list.svg';
import ListDisable from '../../assets/svg/illustration_img_list_disable.svg';

import LapisDisable from '../../assets/lapis_disable.png';
import IconeLupa from '../../assets/icone-lupa.png';
import IconeLapis from '../../assets/icone-lapis.png';
import IconeMoeda from '../../assets/icone-moeda.png';
import IconeDiario from '../../assets/icone-diario.png';
import IconeStatus from '../../assets/icon_status.png';
import IconeStatusConcluido from '../../assets/status_complete.png';
import ImageChat from '../../assets/image_chat.png';
import ImageConsulta from '../../assets/image_consulta.png';

import api from '../../services/api';

import Load from '../../Components/Loading';
import ButtonsPasso3 from '../../Components/ButtonsPasso3';

import {
  Container,
  Name,
  Ciao,
  ContainerView,
  ContainerPasso,
  ContainerPassos,
  ContainerMarcador,
  MarcadorText1,
  MarcadorText2,
  MarcadorText3,
  MarcadorText2Disable,
  Text,
  ImagemPasso1,
  PassoText,
  ContainerHeader,
  PassoTextContainer,
  PassoTextBold,
  TextFooter,
  ContainerButtons1,
  ButtonsAjuda,
  ButtonsAjudaText,
  ImageIcone,
  ButtonContainer,
  ContainerFooter,
  ButtonFooter,
  ButtonFooterImage,
  ButtonFooterText,
  ButtonFooterTextBold,
  ContainerImage,
  ContainerTitle,
  StatusConcluido,
  StatusPendente,
  MarcadorText2Pendente,
  MarcadorText3Pendente,
  MarcadorText3Disable,
  ContainerEmissoes,
} from './styles';

interface Usuario extends Object {
  Name: string;
}

interface Steps extends Object {
  Step1: {
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
  };
  Step2: {
    Name: string;
    Description: string;
    Status: number;
    Option: number;
    StartTime: string;
    EndTime: string;
  };
  Step3: {
    Name: string;
    Description: string;
    Status: number;
    StartTime: string;
    EndTime: string;
  };
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [view, setView] = useState<Usuario>();
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState<Steps>();

  useFocusEffect(
    useCallback(() => {
      async function getUser() {
        const [response] = await AsyncStorage.multiGet([
          '@appcidadania:response',
        ]);

        const Response = JSON.parse(response[1] || '{}');

        setView(Response.User);

        const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
        const req = JSON.parse(Items[1] || '{}');

        const data = {
          Token: req.Request.Token,
          TokenDevice: req.Request.TokenDevice,
        };

        try {
          const res = await api.post('getUser', data);
          setStep(res.data.User);

          setLoading(false);
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      }

      getUser();
    }, []),
  );

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <ContainerView>
        <Ciao>Ciao,</Ciao>
        <Name>{view?.Name}. 👋</Name>
        <ContainerPassos>
          <ContainerMarcador>
            <Text
              style={{
                transform: [{rotate: '180deg'}],
                position: 'absolute',
                margin: 0,
              }}
            />
            {step?.Step1.Status !== 2 ? (
              <MarcadorText1 source={IconeStatus} />
            ) : (
              <MarcadorText1 source={IconeStatusConcluido} />
            )}

            {step?.Step2.Status === 2 ? (
              <MarcadorText2Pendente source={IconeStatusConcluido} />
            ) : step?.Step1.Status === 2 ? (
              <MarcadorText2 source={IconeStatus} />
            ) : (
              <MarcadorText2Disable source={IconeStatus} />
            )}

            {step?.Step3.Status === 2 ? (
              <MarcadorText3 source={IconeStatusConcluido} />
            ) : step?.Step2.Status === 2 ? (
              <MarcadorText3Pendente source={IconeStatus} />
            ) : (
              <MarcadorText3Disable source={IconeStatus} />
            )}
          </ContainerMarcador>
          <Container>
            {step?.Step1.Status !== 2 ? (
              <ContainerPasso
                onPress={() => {
                  navigation.navigate('Passosroutes');
                }}>
                <DnaDisabled
                  width={RFValue(130)}
                  height={RFValue(125)}
                  style={{backgroundColor: '#f2f2f9', borderRadius: 10}}
                />
                <ContainerHeader>
                  <ContainerTitle>
                    <PassoText>Passo 1</PassoText>
                    <StatusPendente>Pendente</StatusPendente>
                  </ContainerTitle>
                  <PassoTextContainer>
                    <PassoTextBold>Cidadania Italiana</PassoTextBold>
                  </PassoTextContainer>
                  <TextFooter>Entenda como funciona</TextFooter>
                </ContainerHeader>
              </ContainerPasso>
            ) : (
              <ContainerPasso
                onPress={() => {
                  navigation.navigate('Passosroutes');
                }}>
                <DnaEnabled
                  width={RFValue(130)}
                  height={RFValue(125)}
                  style={{backgroundColor: '#edf6fa', borderRadius: 10}}
                />
                <ContainerHeader>
                  <ContainerTitle>
                    <PassoText>Passo 1</PassoText>
                    <StatusConcluido>Concluido</StatusConcluido>
                  </ContainerTitle>
                  <PassoTextContainer>
                    <PassoTextBold>Cidadania Italiana</PassoTextBold>

                    <TextFooter>Entenda como funciona</TextFooter>
                  </PassoTextContainer>
                </ContainerHeader>
              </ContainerPasso>
            )}

            <ContainerPasso
              onPress={() => {
                navigation.navigate('Passos2routes');
              }}>
              {step?.Step2.Status === 2 ? (
                <Consulting
                  width={RFValue(130)}
                  height={RFValue(125)}
                  style={{backgroundColor: '#edf6fa', borderRadius: 10}}
                />
              ) : (
                <ConsultingDisabled
                  width={RFValue(130)}
                  height={RFValue(125)}
                  style={{backgroundColor: '#f2f2f9', borderRadius: 10}}
                />
              )}

              <ContainerHeader>
                {step?.Step1.Status === 2 ? (
                  <ContainerTitle>
                    <PassoText>Passo 2</PassoText>
                    {step?.Step2.Status !== 2 ? (
                      <StatusPendente>Pendente</StatusPendente>
                    ) : (
                      <StatusConcluido>Concluido</StatusConcluido>
                    )}
                  </ContainerTitle>
                ) : (
                  <PassoText>Passo 2</PassoText>
                )}

                <PassoTextContainer>
                  <PassoTextBold>Tenho direito?</PassoTextBold>
                </PassoTextContainer>
                <TextFooter>Saiba como definir</TextFooter>
              </ContainerHeader>
            </ContainerPasso>

            <ContainerPasso
              onPress={() => {
                navigation.navigate('Passos3routes');
              }}>
              {step?.Step2.Status !== 2 ? (
                <ListDisable
                  width={RFValue(130)}
                  height={RFValue(125)}
                  style={{backgroundColor: '#f2f2f9', borderRadius: 10}}
                />
              ) : (
                <List
                  width={RFValue(130)}
                  height={RFValue(125)}
                  style={{backgroundColor: '#f2f2f9', borderRadius: 10}}
                />
              )}

              <ContainerHeader>
                {step?.Step2.Status === 2 ? (
                  <ContainerTitle>
                    <PassoText>Passo 3</PassoText>
                    {step?.Step3.Status !== 2 ? (
                      <StatusPendente>Pendente</StatusPendente>
                    ) : (
                      <StatusConcluido>Concluido</StatusConcluido>
                    )}
                  </ContainerTitle>
                ) : (
                  <PassoText>Passo 3</PassoText>
                )}
                <PassoTextContainer>
                  <PassoTextBold>Meus Documentos</PassoTextBold>
                </PassoTextContainer>
                <TextFooter>Monte sua pasta</TextFooter>
              </ContainerHeader>
            </ContainerPasso>
          </Container>
        </ContainerPassos>
        {step?.Step2.Status === 2 ? (
          <ContainerEmissoes>
            <ButtonsPasso3
              Header="Emissões"
              Text="Vamos iniciar a coleta de origem da cidadania"
              onPress={() => {
                navigation.navigate('Emissoes');
              }}
            />
          </ContainerEmissoes>
        ) : (
          <></>
        )}
        <ContainerButtons1>
          <ButtonsAjuda>
            <ImageIcone source={IconeLupa} />
            <ButtonContainer>
              <ButtonsAjudaText>Encontre o antenato</ButtonsAjudaText>
            </ButtonContainer>
          </ButtonsAjuda>
          <ButtonsAjuda>
            <ImageIcone source={IconeLapis} />
            <ButtonContainer>
              <ButtonsAjudaText>Templates úteis</ButtonsAjudaText>
            </ButtonContainer>
          </ButtonsAjuda>
        </ContainerButtons1>
        <ContainerButtons1>
          <ButtonsAjuda
            onPress={() => {
              navigation.navigate('FinanceiroRoutes');
            }}>
            <ImageIcone source={IconeMoeda} />
            <ButtonContainer>
              <ButtonsAjudaText>Controle financeiro</ButtonsAjudaText>
            </ButtonContainer>
          </ButtonsAjuda>
          <ButtonsAjuda
            onPress={() => {
              navigation.navigate('DiarioRoutes');
            }}>
            <ImageIcone source={IconeDiario} />
            <ButtonContainer>
              <ButtonsAjudaText>Diário da cidadania</ButtonsAjudaText>
            </ButtonContainer>
          </ButtonsAjuda>
        </ContainerButtons1>
        <ContainerFooter>
          <ButtonFooter>
            <ContainerImage>
              <ButtonFooterImage source={ImageChat} />
            </ContainerImage>
            <ButtonFooterText>Atendimento</ButtonFooterText>
            <ButtonFooterTextBold>Precisa de ajuda?</ButtonFooterTextBold>
            <ButtonFooterText>Fale com a gente</ButtonFooterText>
          </ButtonFooter>
          <ButtonFooter>
            <ContainerImage>
              <ButtonFooterImage source={ImageConsulta} />
            </ContainerImage>
            <ButtonFooterText>Pra você</ButtonFooterText>
            <ButtonFooterTextBold>Ferramentas</ButtonFooterTextBold>
            <ButtonFooterText>Tudo pra você se organizar</ButtonFooterText>
          </ButtonFooter>
        </ContainerFooter>
      </ContainerView>
    </Container>
  );
};

export default Home;
