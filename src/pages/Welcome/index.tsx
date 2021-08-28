/* eslint-disable react/jsx-closing-bracket-location */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import {Container, Title, ButtonContinua, ButtonText} from './styles';

import Input from '../../Components/react-native-input-style/input/Input';

const Welcome: React.FC = () => {
  const navigate = useNavigation();
  const [name, setName] = useState('');

  const handleCreateUser = useCallback(async () => {
    const item = DeviceInfo.getAndroidId().then(async (token) => {
      console.log(token);

      const data = {
        Token: '5dej8kij77diek8tqmirkdiploiks4JJSud78G',
        // TokenDevice:
        //   '0c8a753f9ba81fa8959d51e9680d1ae3c6489949337a75d538d23a3513c9f487',
        TokenDevice: token,
        Name: name,
        Step: 1,
        Task: 1,
        Status: 1,
      };

      return data;
    });

    const data = await item;
    try {
      const response = await api.post('createUser', data);

      await AsyncStorage.multiSet([
        ['@appcidadania:response', JSON.stringify(response.data)],
      ]);
      navigate.navigate('Appcidadania');
    } catch (err) {
      console.log(err);
    }
  }, [name, navigate]);

  const handleGetName = useCallback(async (item) => {
    setName(item);
  }, []);

  return (
    <>
      <Container>
        <Title>Vamos tornar a sua jornada mais pessoal!</Title>
        <Input
          id="name"
          label="Seu nome ou apelido"
          keyboardType="default"
          onInputChange={(item: any) => {
            handleGetName(item);
          }}
          contain=""
          initialValue=""
          value=""
          outlined
          borderColor="#f09d4c"
        />
      </Container>
      {name ? (
        <ButtonContinua
          enabled
          onPress={() => {
            handleCreateUser();
          }}>
          <ButtonText>Continuar</ButtonText>
        </ButtonContinua>
      ) : (
        <ButtonContinua enabled={false} style={{backgroundColor: '#fafafa'}}>
          <ButtonText style={{color: '#d0d0d0'}}>Continuar</ButtonText>
        </ButtonContinua>
      )}
    </>
  );
};

export default Welcome;
