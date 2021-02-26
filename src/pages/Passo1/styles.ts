import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-top: 15%;
  flex: 1;
  padding: 6%;
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
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 28px;
`;

export const ButtonHelpText = styled.Text`
  font-size: 14px;
  color: #db822b;
  font-family: 'Poppins-Medium';
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #f09d4c;
  font-family: 'Poppins-Regular';
`;

export const GoBackIcon = styled(Icon)`
  margin-left: 2%;
`;
