/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// eslint-disable-next-line react/jsx-one-expression-per-line
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Lupadisable from '../../assets/lupa_disable.png';
import IlustrationDisable from '../../assets/illustration_disable.png';
import LapisDisable from '../../assets/lapis_disable.png';
import IconeLupa from '../../assets/icone-lupa.png';
import IconeLapis from '../../assets/icone-lapis.png';
import IconeMoeda from '../../assets/icone-moeda.png';
import IconeDiario from '../../assets/icone-diario.png';
import IconeStatus from '../../assets/icon_status.png';
import ImageChat from '../../assets/image_chat.png';
import ImageConsulta from '../../assets/image_consulta.png';

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
} from './styles';

interface Usuario extends Object {
  Name: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<Usuario>();

  useEffect(() => {
    async function getUser() {
      const [user] = await AsyncStorage.multiGet(['@appcidadania:user']);

      const User = JSON.parse(user[1] || '{}');

      setName(User.User);
    }

    getUser();
  }, []);

  return (
    <Container>
      <ContainerView>
        <Ciao>Ciao,</Ciao>
        <Name>{name?.Name}. 👋</Name>
        <ContainerPassos>
          <ContainerMarcador>
            <Text
              style={{
                transform: [{rotate: '180deg'}],
                position: 'absolute',
                margin: 0,
              }}
            />
            <MarcadorText1 source={IconeStatus} />
            <MarcadorText2 source={IconeStatus} />
            <MarcadorText3 source={IconeStatus} />
          </ContainerMarcador>
          <Container>
            <ContainerPasso
              onPress={() => {
                navigation.navigate('Passosroutes');
              }}>
              <ImagemPasso1 source={Lupadisable} />
              <ContainerHeader>
                <ContainerTitle>
                  <PassoText>Passo 1</PassoText>
                  <Status>Pendente</Status>
                </ContainerTitle>
                <PassoTextContainer>
                  <PassoTextBold>Cidadania Italiana</PassoTextBold>
                </PassoTextContainer>
                <TextFooter>Entenda como funciona</TextFooter>
              </ContainerHeader>
            </ContainerPasso>
            <ContainerPasso
              onPress={() => {
                navigation.navigate('Passos2routes');
              }}>
              <ImagemPasso1 source={IlustrationDisable} />
              <ContainerHeader>
                <PassoText>Passo 2</PassoText>
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
