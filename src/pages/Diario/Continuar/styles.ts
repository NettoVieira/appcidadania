import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import IconCusto from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
  padding: 10px 24px 0 24px;
`;

export const ContainerHeader = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Poppins-Regular';
  color: #172239;
`;

export const Actions = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Valor = styled.Text`
  font-size: 18px;
  color: #101010;
  font-family: 'Poppins-Medium';
`;

export const ButtonEdit = styled(RectButton)``;

export const ButtonImage = styled.Image`
  width: 190px;
  height: 40px;
`;

export const Body = styled.View`
  width: 100%;
  margin-top: 23px;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #6d6d78;
`;

export const Modal = styled.Modal`
  flex: 1;
  height: 100px;
`;

export const HeaderModal = styled.View`
  width: 100%;
  padding-left: 10px;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const IconClose = styled(IconCusto)``;

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
`;

export const ButtonContinua = styled.TouchableOpacity`
  background-color: #f09d4c;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 10px;
  margin: 16px 20px 20px 16px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins-Medium';
`;

export const Subtitle = styled.Text`
  font-family: 'Poppins-Regular';
  color: #b2b2b2;
  font-size: 14px;
`;
