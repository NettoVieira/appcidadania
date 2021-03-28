/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// eslint-disable-next-line react/jsx-one-expression-per-line
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import Lupadisable from '../../assets/lupa_disable.png';
import IlustrationDisable from '../../assets/illustration_disable.png';
import LapisDisable from '../../assets/lapis_disable.png';
import IconeLupa from '../../assets/icone-lupa.png';
import IconeLapis from '../../assets/icone-lapis.png';
import IconeMoeda from '../../assets/icone-moeda.png';
import IconeDiario from '../../assets/icone-diario.png';
import IconeStatus from '../../assets/icon_status.png';
import IconeStatusConcluido from '../../assets/status_complete.png';
import ImageChat from '../../assets/image_chat.png';
import Ilustration from '../../assets/illustration.png';
import ImageConsulta from '../../assets/image_consulta.png';
import Dna from '../../assets/illustration_dna.png';
import api from '../../services/api';

import Load from '../../Components/Loading';

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
  Status,
  StatusConcluido,
  StatusPendente,
  MarcadorText2Pendente,
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

            <MarcadorText3 source={IconeStatus} />
          </ContainerMarcador>
          <Container>
            {step?.Step1.Status !== 2 ? (
              <ContainerPasso
                onPress={() => {
                  navigation.navigate('Passosroutes');
                }}>
                <ImagemPasso1 source={Lupadisable} />
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
                <ImagemPasso1
                  source={Dna}
                  style={{backgroundColor: '#edf6fa'}}
                />
                <ContainerHeader>
                  <ContainerTitle>
                    <PassoText>Passo 1</PassoText>
                    <StatusConcluido>Concluido</StatusConcluido>
                  </ContainerTitle>
                  <PassoTextContainer>
                    <PassoTextBold>Cidadania Italiana</PassoTextBold>
                  </PassoTextContainer>
                  <TextFooter>Entenda como funciona</TextFooter>
                </ContainerHeader>
              </ContainerPasso>
            )}

            <ContainerPasso
              onPress={() => {
                navigation.navigate('Passos2routes');
              }}>
              {step?.Step2.Status === 2 ? (
                <ImagemPasso1
                  source={Ilustration}
                  style={{backgroundColor: '#edf6fa'}}
                />
              ) : (
                <ImagemPasso1 source={IlustrationDisable} />
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
            <ContainerPasso>
              <ImagemPasso1 source={LapisDisable} />
              <ContainerHeader>
                <PassoText>Passo 3</PassoText>
                <PassoTextContainer>
                  <PassoTextBold>Meus Documentos</PassoTextBold>
                </PassoTextContainer>
                <TextFooter>Monte sua pasta</TextFooter>
              </ContainerHeader>
            </ContainerPasso>
          </Container>
        </ContainerPassos>
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
          <ButtonsAjuda>
            <ImageIcone source={IconeMoeda} />
            <ButtonContainer>
              <ButtonsAjudaText>Templates úteis</ButtonsAjudaText>
            </ButtonContainer>
          </ButtonsAjuda>
          <ButtonsAjuda>
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
