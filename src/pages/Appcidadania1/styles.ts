import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: 'Poppins-Regular';
  text-align: center;
  margin-top: ${RFValue(6)}px;
`;

export const Img = styled.Image`
  height: ${RFValue(360)}px;
  width: ${RFValue(390)}px;
  margin-bottom: ${RFValue(15)}px;
  background-color: #edf6fa;
  border-bottom-left-radius: 170px;
  border-bottom-right-radius: 170px;
`;

export const Texto = styled.Text`
  color: #6d6d78;
  font-size: ${RFValue(12)}px;
  margin: 0 ${RFValue(15)}px 0 ${RFValue(15)}px;
  font-family: 'Poppins-Regular';
  text-align: center;
`;

export const Marcador = styled.View`
  margin-top: ${RFValue(20)}px;
  flex-direction: row;
  margin-bottom: ${RFValue(12)}px;
`;

export const MarcadorText1 = styled.Text`
  margin: ${RFValue(2)}px;
  height: ${RFValue(8)}px;
  width: ${RFValue(8)}px;
  border-radius: 50px;
  background-color: #eaeaea;
`;

export const MarcadorText2 = styled.Text`
  margin: ${RFValue(2)}px;
  height: ${RFValue(8)}px;
  width: ${RFValue(18)}px;
  border-radius: 50px;
  background-color: #f09d4c;
`;

export const MarcadorText3 = styled.Text`
  margin: ${RFValue(2)}px;
  height: ${RFValue(8)}px;
  width: ${RFValue(8)}px;
  border-radius: 50px;
  background-color: #eaeaea;
`;

export const ButtonContinue = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #fae8e8;
  height: ${RFValue(50)}px;
  margin-bottom: 2%;
  margin-left: 7%;
  margin-right: 7%;
  border-radius: 10px;
`;

export const ButtonContinueText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: 'Poppins-Medium';
  color: #db822b;
`;

export const ContainerText = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
