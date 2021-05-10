import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native';
import {List} from './index';

// Estilizações da modal
export const Modal = styled.Modal``;

export const HeaderModal = styled.View`
  width: 100%;
  padding-left: 10px;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const IconClose = styled(Icon)``;

export const BodyModal = styled.View`
  width: 100%;
  margin-top: 10px;
  height: 350px;
`;

export const ContainerTextModal = styled.View`
  width: 100%;
  margin-left: 10px;
`;

export const ContainerInputs = styled.View`
  width: 100%;
  justify-content: center;
`;

export const ContainerTextArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TextAreaView = styled.View`
  border: #b2b2b2;
  width: 93%;
  height: 150px;
  border-radius: 10px;
`;

export const TextAreaInput = styled.TextInput``;

export const FooterModal = styled.View`
  width: 100%;
`;

// Estlizaçãos da modal

export const Container = styled.ScrollView`
  flex: 1;
  margin-top: 80px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;

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
  color: #6d6d78;
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

export const ButtonContinua = styled.TouchableOpacity`
  background-color: #f09d4c;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 10px;
  margin: 16px 20px 20px 16px;
`;

export const ButtonFechar = styled.TouchableOpacity`
  background-color: #fae8e8;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 10px;
  margin: 0 20px 20px 16px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins-Medium';
`;

export const ButtonTextFechar = styled.Text`
  font-size: 18px;
  color: #f09d4c;
  font-family: 'Poppins-Medium';
`;

export const TextTitleList = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: #000;
`;

export const ContainerTitles = styled.TouchableOpacity``;

export const Adicionar = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const AdicionarText = styled.Text`
  font-size: 14;
  font-family: 'Poppins-Regular';
`;

export const IconList = styled(Icon)``;
