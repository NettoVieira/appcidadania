import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-top: 15%;
  padding: 5%;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  width: 80%;
  margin-bottom: 20px;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
  font-size: 30px;
  font-family: 'Poppins-Medium';
  color: #172239;
  font-weight: 900;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  font-size: 13px;
  font-family: 'Poppins-Regular';
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: #f09d4c;
  font-family: 'Poppins-Regular';
`;

export const GoBackIcon = styled(Icon)`
  margin-left: 2%;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15px;

  align-items: center;
  width: 100%;
`;

export const ButtonImg = styled.Image`
  height: 90px;
  width: 410px;
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

export const Status = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 10px;
  color: #ff0000;
  background-color: #fae8e8;
  border-radius: 20px;
  text-align: center;
  margin-left: 30px;
  width: 65px;
  height: 16px;
`;
