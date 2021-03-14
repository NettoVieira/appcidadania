import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  margin-top: 25%;
`;

export const Subtitle = styled.Text`
  margin-top: 18px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  font-size: 20px;
`;

export const ContainerHeader = styled.View`
  margin-left: 5%;
  margin-right: 5%;
`;

export const ContainerBody = styled.View`
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const ContainerFooter = styled.View`
  margin-left: 5%;
  margin-right: 5%;
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #f09d4c;
  font-family: 'Poppins-Regular';
`;

export const GoBackIcon = styled(Icon)`
  margin-left: 2%;
`;

export const Image = styled.Image``;

export const Progresbar = styled.Image`
  width: 100%;
  height: 10px;
`;

export const TitleOpacity = styled.Text`
  font-family: 'Poppins-Regualr';
  font-size: 18px;
  color: #b2b2b2;
  margin-top: 28px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  margin-top: 9px;
  font-size: 13px;
  font-family: 'Poppins-Regular';
`;

export const Title = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 24px;
  color: #172239;
`;
