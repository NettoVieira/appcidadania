import Icon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerBody = styled.ScrollView`
  width: 90%;
  height: 100%;
  margin-top: 20%;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 28px;
  color: #172239;
  margin-bottom: -10px;
`;

export const SubTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #b2b2b2;
`;

export const TitleSection = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 18px;
  color: #172239;
`;

export const ContainerHeader = styled.View`
  width: 100%;
`;

export const ContainerSection = styled.View`
  width: 100%;
  margin-top: 28px;
`;

export const SubTitleSection = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  color: #6d6d78;
`;

export const ContainerActions = styled.View`
  width: 100%;
  margin-top: 26px;
`;

export const Action = styled.TouchableOpacity`
  background-color: #f8f8f8;
  height: 75px;
  width: 100%;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const ActionText = styled.Text`
  font-size: 15px;
  color: #101010;
  font-family: 'Poppins-Medium';
`;

export const ActionSubText = styled.Text`
  font-family: 'Poppins-Regular';
  color: #101010;
  font-size: 13px;
`;

export const ActionImage = styled.Image`
  margin-right: 12px;
`;

export const ActionTextIcon = styled(Icon);

export const ContainerActionText = styled.View`
  width: 67%;
`;
