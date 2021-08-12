import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 15%;
  padding: ${RFValue(24)}px;
`;

export const Subtitle = styled.Text`
  margin-top: 18px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  font-size: ${RFValue(14)}px;
`;

export const ContainerHeader = styled.View`
  margin-left: 5%;
  margin-right: 5%;
`;

export const ButtonContinua = styled.TouchableOpacity`
  background-color: #f09d4c;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: #fff;
  font-family: 'Poppins-Medium';
`;

export const ContainerBody = styled.View`
  margin-top: 10%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const ContainerFooter = styled.View`
  margin-top: 55%;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #f09d4c;
  font-family: 'Poppins-Regular';
`;

export const GoBackIcon = styled(Icon)`
  margin-left: 2%;
`;

export const Image = styled.Image`
  width: 75px;
  height: 75px;
`;

export const Progresbar = styled.Image`
  width: 100%;
  height: 10px;
`;

export const TitleOpacity = styled.Text`
  font-family: 'Poppins-Regualr';
  font-size: ${RFValue(14)}px;
  color: #b2b2b2;
  margin-top: 28px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  margin-top: 9px;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  margin-bottom: ${RFValue(12)}px;
  color: #172239;
`;
