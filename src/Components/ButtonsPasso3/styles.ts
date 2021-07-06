import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  flex-direction: row;
  height: 90px;
  width: 335px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-bottom-color: #efefef;
  border-bottom-width: 1px;
`;

export const Titulo = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: #101010;
`;

export const Descricao = styled.Text`
  font-size: 10px;
  font-family: 'Poppins-Regular';
`;

export const GoBackIcon = styled(Icon)`
  margin-left: 2%;
`;

export const Chevron = styled.Image``;

export const Icone = styled.Image``;

export const ContainerText = styled.View`
  margin-left: 12px;
  width: 70%;
`;

export const ContainerTitle = styled.View``;
