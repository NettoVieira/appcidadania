/* eslint-disable no-console */
/* eslint-disable react/jsx-closing-bracket-location */
import React, {useCallback, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Progresbar,
  ContainerImage,
  Subtitle,
  Paragraph,
} from './styles';
import Load from '../../../Components/Loading';
import Barprogress from '../../../assets/progressbar3.png';
import {ButtonContinua, ButtonText} from '../styles';
import api from '../../../services/api';

const Introducao3: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleConcluirEtapa = useCallback(async () => {
    setLoading(true);
    const [Items] = await AsyncStorage.multiGet(['@appcidadania:response']);
    const {Request, User} = JSON.parse(Items[1] || '{}');

    console.log(User);

    const data = {
      Token: Request.Token,
      TokenDevice: Request.TokenDevice,
      Name: User.Name,
      Step: 1,
      Task: 1,
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

        <Subtitle>Já ouviu falar em cidadania Miojo?</Subtitle>
        <Paragraph>
          Sim, olha que maravilha, aquela que com 3 minutos está pronta! É
          praticamente isso que eles oferecem. Pois é, preciso te informar: ISSO
          NÃO EXISTE! O reconhecimento de Cidadania italiana é um procedimento
          cheio de pegadinhas, que requer muita atenção, dedicação, ORGANIZAÇÃO
          e PACIÊNCIA!!
        </Paragraph>
        <Subtitle>É pra isso que este APP existe!</Subtitle>
        <Paragraph>
          Pra não te deixar cometer nenhuma destas gafes e perder tempo e
          dinheiro. Beleza, agora que você já sabe que o sucesso depende de você
          e de como você utiliza as ferramentas e conhecimentos de forma
          inteligente, vamos responder algumas perguntas básicas sobre o
          procedimento.
        </Paragraph>

        <ButtonContinua onPress={handleConcluirEtapa}>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </ContainerImage>
    </Container>
  );
};

export default Introducao3;
