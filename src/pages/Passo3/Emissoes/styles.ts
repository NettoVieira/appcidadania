import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native';
import {List} from './index';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  margin-top: 80px;
  margin-left: 5%;
`;

export const ContainerTitle = styled.View``;

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Poppins-Regular';
`;

export const Subtitle = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #b2b2b2;
`;

export const ContainerList = styled.View``;

export const ColumsSolicitado = styled.Text`
  margin-left: 44%;
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #a2a2a2;
`;

export const Colums = styled.Text`
  margin-left: 7%;
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #a2a2a2;
`;

export const ColumsTipo = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #a2a2a2;
`;

export const ContainerColums = styled.View`
  width: 100%;
  flex-direction: row;
  margin-left: 5%;
`;

export const ItemsList = styled(FlatList as new () => FlatList<List>)`
  padding: 10px 10px 16px;
`;

export const ContainerFlatList = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const Descricao = styled.Text`
  font-size: 15px;
  font-family: 'Poppins-Regular';
  margin-bottom: 20px;
`;

export const AddDocs = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 3%;
  align-items: center;
  margin-bottom: 8px;
`;

export const AddDocsText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #f09d4c;
  margin-left: 6px;
`;

export const ContainerSwitch = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 40%;
`;

export const Switch = styled.Switch`
  margin-right: 35px;
  margin-bottom: 13px;
`;

export const ContainerDescricao = styled.View`
  width: 60%;
  justify-content: center;
  margin-top: 8px;
`;

export const IconList = styled(Icon)``;
