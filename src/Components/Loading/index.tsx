/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import LottieView from 'lottie-react-native';

import {Container} from './styles';
import Animacao from '../../assets/Animacoes/lf30_wda3ea4c.json';

const Loading: React.FC = () => {
  return (
    <Container>
      <LottieView source={Animacao} autoPlay loop />
    </Container>
  );
};

export default Loading;
