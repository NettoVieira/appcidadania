import styled from 'styled-components/native';
import IconCusto from 'react-native-vector-icons/Feather';
import {FlatList} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {RectButton} from 'react-native-gesture-handler';
import {RFValue} from 'react-native-responsive-fontsize';
import {List} from './index';

export const Container = styled.View`
  flex: 1;
  margin-top: 55px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 28px;
  color: #172239;
`;

export const ContainerEmptyList = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 30px 0 30px 0;
`;

export const TitleEmpty = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
`;

export const SubtitleEmpty = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #6d6d78;
  text-align: center;
`;

export const ContainerCusto = styled.View`
  width: 90%;
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
  align-items: center;
  margin-top: 32px;
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins-Regular';
  color: #b2b2b2;
  font-size: 14px;
`;

export const ContainerTitle = styled.View`
  width: 60%;
`;

export const AddDocs = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AddDocsText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #f09d4c;
  margin-left: 6px;
`;

export const ItemsList = styled(FlatList as new () => FlatList<List>)`
  height: 60%;
`;

export const IconList = styled(IconCusto)``;

export const ListFinances = styled.View`
  width: 85%;
`;

export const ContainerList = styled(Swipeable)`
  justify-content: center;
`;

export const ContainerListHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleFinances = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-Medium';
  color: #101010;
`;

export const ValueFinances = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;

  color: #6d6d78;
`;
export const Continue = styled.TouchableOpacity``;

export const ContinueText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #f09d4c;
`;

export const Modal = styled.Modal`
  flex: 1;
  height: 100px;
`;

export const HeaderModal = styled.View`
  width: 100%;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const IconClose = styled(IconCusto)``;

export const Item = styled(Swipeable)``;

export const ItemButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: #e84941;
  height: 57px;
  width: 50px;
`;

export const ItemButtonKinship = styled(RectButton)`
  align-items: center;
  justify-content: center;
  background-color: #e84941;
  height: 70px;
  width: 70px;
  margin-right: 10px;
`;

export const ItemButtonText = styled(IconCusto)`
  color: #ffffff;
`;

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
  justify-content: center;
  align-items: center;
`;

export const ButtonContinua = styled.TouchableOpacity`
  background-color: #f09d4c;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 93%;
  margin-top: 12px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins-Medium';
`;

export const Bodyheader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 85%;
`;

export const ButtonGerir = styled.TouchableOpacity``;

export const Gerir = styled.Image`
  width: 148px;
  height: 40px;
`;

export const ButtonContinue = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #fae8e8;
  height: 50px;
  width: 150px;
  margin-bottom: 10%;

  border-radius: 10px;
`;

export const ButtonContinueText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Medium';
  color: #db822b;
`;

export const ContainerFooter = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0 24px 0 24px;
  justify-content: space-between;
`;
