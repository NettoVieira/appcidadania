import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
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

export const ContainerBody = styled.View`
  margin-top: ${RFValue(40)}px;
`;

export const ContainerFooter = styled.View``;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 14px;
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
  font-size: 14px;
  color: #b2b2b2;
  margin-top: 36px;
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
