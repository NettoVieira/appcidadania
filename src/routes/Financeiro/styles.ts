import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin: 5px;
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const GoBackIcon = styled(Icon)``;

export const Text = styled.Text`
  font-size: 16px;
  color: #101010;
  font-family: 'Poppins-Regular';
  margin-left: 8px;
`;

export const ButtonHelp = styled.TouchableOpacity`
  border: #db822b;
  border-width: 2px;
  height: 45px;
  width: 130px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

export const ButtonHelpText = styled.Text`
  font-size: 14px;
  color: #db822b;
  font-family: 'Poppins-Medium';
`;
