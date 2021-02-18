/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-tag-location */
// eslint-disable-next-line react/jsx-one-expression-per-line
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

import {Container, Name, Ciao, ContainerText} from './styles';

interface Usuario extends Object {
  Name: string;
}

const Home: React.FC = () => {
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
      <ContainerText>
        <Ciao>Ciao,</Ciao>
        <Name>{name?.Name}. 👋</Name>
      </ContainerText>
    </Container>
  );
};

export default Home;
