import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  margin-top: 25%;
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins-Regular';
  color: #b2b2b2;
  font-size: 14px;
  margin-bottom: -5px;
`;

export const TitleParagraph = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #172239;
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
  margin-top: 32px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins-Medium';
`;

export const ContainerBody = styled.View`
  margin-left: 5%;
  margin-right: 5%;
`;

export const ContainerFooter = styled.View`
  margin-top: 20%;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
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
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  margin-top: 9px;
  font-size: 13px;
  font-family: 'Poppins-Regular';
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 28px;

  color: #172239;
`;

export const ButtonContinue = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fae8e8;
  height: 60px;
  margin-bottom: 10%;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 10px;
`;

export const ButtonContinueText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Medium';
  color: #db822b;
`;
