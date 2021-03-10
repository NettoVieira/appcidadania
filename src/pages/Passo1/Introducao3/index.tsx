/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Progresbar,
  ContainerImage,
  Subtitle,
  Paragraph,
} from './styles';

import Barprogress from '../../../assets/progressbar3.png';
import {ButtonContinua, ButtonText} from '../styles';

const Introducao3: React.FC = () => {
  const navigation = useNavigation();

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

        <ButtonContinua
          onPress={() => {
            navigation.navigate('Passosroutes');
          }}>
          <ButtonText>Concluir etapa</ButtonText>
        </ButtonContinua>
      </ContainerImage>
    </Container>
  );
};

export default Introducao3;
