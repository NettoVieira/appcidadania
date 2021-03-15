/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-unescaped-entities */
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

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
  Status,
} from './styles';

import Planob from '../../assets/plano_b.png';
import Oportunidade from '../../assets/oportunidade.png';
import Emprego from '../../assets/emprego.png';
import Estudo from '../../assets/estudo.png';
import Beneficios from '../../assets/beneficios.png';
import Facilidade from '../../assets/facilidade.png';
import heranca from '../../assets/heranca.png';
import Aposentadoria from '../../assets/aposentadoria.png';

const Passo1: React.FC = () => {
  const navigation = useNavigation();

  const handleIntroducao = useCallback(() => {
    navigation.navigate('Introducao', {introducao: 'Introducao'});
  }, [navigation]);

  return (
    <Container>
      <Scroll>
        <ContainerTitle>
          <Title>Cidadania Italiana </Title>
        </ContainerTitle>
        <SubTitle>Entenda como funciona</SubTitle>
        <Paragraph>
          A nacionalidade na Itália é regida pelo princípio do jus sanguinis.
          Deixe-me simplificar: é italiano aquele que é descendente de um
          Italiano. Se você sabe que tem um ascendente nascido na Itália, ou já
          ouviu alguma tia dizer que se lembra de “ouvir vovô falar que o pai
          dele tinha vindo da Itália”, então este App foi feito pra você.
        </Paragraph>

        <GoBack onPress={handleIntroducao}>
          <Text>Ler introdução completa</Text>
          <GoBackIcon name="chevron-right" size={25} color="#db822b" />
          <Status>Pendente</Status>
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
        <Button
          onPress={() => {
            navigation.navigate('Planob');
          }}>
          <ButtonImg source={Planob} />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Oportunidade');
          }}>
          <ButtonImg source={Oportunidade} />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Emprego');
          }}>
          <ButtonImg source={Emprego} />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Ensino');
          }}>
          <ButtonImg source={Estudo} />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Beneficios');
          }}>
          <ButtonImg source={Beneficios} />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Facilidade');
          }}>
          <ButtonImg source={Facilidade} />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Heranca');
          }}>
          <ButtonImg source={heranca} />
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('Aposentadoria');
          }}>
          <ButtonImg source={Aposentadoria} />
        </Button>

        <SubTitle>
          Antes de você iniciar os passos práticos: que tal esclarecermos alguns
          mitos?
        </SubTitle>
        <GoBack
          onPress={() => {
            navigation.navigate('Mitos');
          }}>
          <Text>Entenda os principais mitos</Text>
          <GoBackIcon name="chevron-right" size={25} color="#db822b" />
          <Status>Pendente</Status>
        </GoBack>

        <ButtonContinua>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </Scroll>
    </Container>
  );
};

export default Passo1;
