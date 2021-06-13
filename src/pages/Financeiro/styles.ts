import styled from 'styled-components/native';
import IconCusto from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 28px;

  color: #172239;
`;

export const ContainerCusto = styled.View`
  width: 85%;
  background-color: #f8f8f8;
  height: 70px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
`;

export const ContainerIcon = styled.View`
  margin-right: 8px;
  margin-left: 8px;
`;

export const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;
export const ContainerText = styled.View``;

export const DescCusto = styled.Text`
  font-size: 10px;
  font-family: 'Poppins-Regular';
  color: #101010;
`;

export const Valor = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: #101010;
`;

export const Body = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  margin-top: 18px;
  font-family: 'Poppins-Regular';
  color: #b2b2b2;
  font-size: 14px;
`;

export const ContainerTitle = styled.View`
  width: 85%;
`;

export const AddDocs = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 3%;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const AddDocsText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #f09d4c;
  margin-left: 6px;
`;

export const IconList = styled(IconCusto)``;
