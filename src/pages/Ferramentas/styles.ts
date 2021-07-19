import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 24px;

  background-color: #fff;
`;

export const ContainerActions = styled.View`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Poppins-Regular';
  color: #172239;
`;

export const Outros = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
`;

export const SubTitle = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #b2b2b2;
`;

export const Action = styled(RectButton)`
  width: 100%;
  height: 70px;
  background-color: #f8f8f8;
  border-radius: 16px;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ActionIconContent = styled.View`
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const ActionIconImage = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ActionTextContent = styled.View`
  width: 56%;
  margin-left: 10px;
  justify-content: center;
`;

export const ActionTitle = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: #101010;
`;

export const ActionSubtitle = styled.Text`
  font-size: 10px;
  font-family: 'Poppins-Regular';
`;
