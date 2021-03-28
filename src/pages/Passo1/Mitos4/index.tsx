/* eslint-disable react/jsx-closing-bracket-location */
import React, {useCallback, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Progresbar,
  Title,
  TitleOpacity,
  ContainerImage,
  Subtitle,
  Paragraph,
  ButtonContinua,
  ButtonText,
} from './styles';

import Barprogress from '../../../assets/progressbar-mito4.png';
import Load from '../../../Components/Loading';
import api from '../../../services/api';

const Mitos4: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleConcluirEtapa = useCallback(async () => {
    setLoading(true);
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const {Request, User} = JSON.parse(Items[1] || '{}');

    const data = {
      Token: Request.Token,
      TokenDevice: Request.TokenDevice,
      Name: User.Name,
      Step: 1,
      Task: 3,
      Status: 2,
    };

    try {
      await api.post('updateUser', data);

      setLoading(false);
      navigation.navigate('Passosroutes');
    } catch (err) {
      console.log(err);
    }
  }, [navigation]);

  if (loading) {
    return <Load />;
  }

  return (
    <Container>
      <ContainerImage>
        <Progresbar source={Barprogress} />
        <TitleOpacity>Cidadania Italiana</TitleOpacity>
        <Title>Principais mitos</Title>
        <Subtitle>
          Quem tem mulher na linha de transmissão não tem direito ao
          reconhecimento:
        </Subtitle>
        <Paragraph>
          Gente, mas isso a muito tempo atrás né? Hoje em dia, filhos de
          mulheres nascidas antes de 1948 tem o seu direito assegurado através
          de um processo civil ajuizado em Roma, que por sinal já está bastante
          consolidado. Se este é o seu caso, fique tranquilo, você precisará
          apenas assinar uma procuração para que um advogado italiano te
          represente lá. Este passo está bem especificado no APP. Pode seguir
          normalmente, que no momento certo cuidarei de você.
        </Paragraph>

        <ButtonContinua onPress={handleConcluirEtapa}>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </ContainerImage>
    </Container>
  );
};

export default Mitos4;
