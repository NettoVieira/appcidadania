import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 15%;
  padding: ${RFValue(24)}px;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  width: 80%;
`;

export const ContainerImage = styled.View`
  align-items: center;
`;

export const ImageLapis = styled.Image`
  margin-top: -5%;
  margin-right: 9.5%;
  height: 240px;
  width: 260px;
`;
export const ContainerAnimacao = styled.View`
  position: absolute;
  width: ${RFValue(280)}px;
  height: ${RFValue(360)}px;
`;

export const Backgroudimg = styled.Image`
  width: 100%;
  height: ${RFValue(380)}px;
  position: absolute;
  border-radius: 20px;
`;

export const ContainerOptions = styled.View`
  width: 100%;
`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(28)}px;
  text-align: center;
  font-family: 'Poppins-Regular';
  color: #172239;
`;

export const ContainerBodyModal = styled.View`
  width: 100%;
  margin-top: ${RFPercentage(53)}px;
  padding-right: ${RFValue(24)}px;
  padding-left: ${RFValue(24)}px;
`;

export const Close = styled.Pressable`
  width: 400px;
  margin-top: 2%;
  justify-content: flex-start;
`;

export const CloseText = styled.Image`
  height: ${RFValue(35)}px;
`;

export const ButtonTextModal = styled.Text`
  font-size: ${RFValue(18)}px;
  color: #fff;
  font-family: 'Poppins-Medium';
`;

export const ParagraphModal = styled.Text`
  color: #6d6d78;
  margin-top: 4%;
  font-size: ${RFValue(12)}px;
  text-align: center;
  font-family: 'Poppins-Regular';
`;

export const ButtonContinuaModal = styled.TouchableOpacity`
  background-color: #f09d4c;
  justify-content: center;
  align-items: center;
  height: ${RFValue(55)}px;
  border-radius: 10px;
  margin-top: ${RFValue(30)}px;
`;

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-family: 'Poppins-Medium';
  color: #172239;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  margin-top: ${RFValue(12)}px;
  margin-bottom: ${RFValue(12)}px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  font-size: ${RFValue(12)}px;
  font-family: 'Poppins-Regular';
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #f09d4c;
  font-family: 'Poppins-Regular';
`;

export const GoBackIcon = styled(Icon)`
  margin-left: 1%;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 15px;
  align-items: center;
  justify-content: center;
`;

export const ButtonImg = styled.Image``;

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

export const StatusConcluido = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: ${RFValue(8)}px;
  color: #15b200;
  background-color: #dbe9ee;
  border-radius: 20px;
  text-align: center;

  width: ${RFValue(58)}px;
  height: ${RFValue(15)}px;
`;

export const StatusPendente = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: ${RFValue(8)}px;
  color: #ff0000;
  background-color: #fae8e8;
  border-radius: 20px;
  text-align: center;

  width: ${RFValue(54)}px;
  height: ${RFValue(14)}px;
`;

export const ContainerAction = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerButton = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Action = styled(RectButton)`
  background-color: #f8f8f8;
  height: ${RFValue(85)}px;
  width: 100%;
  margin-top: 2px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const ActionText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: #101010;
  font-family: 'Poppins-Medium';
`;

export const ActionSubText = styled.Text`
  font-family: 'Poppins-Regular';
  color: #101010;
  font-size: ${RFValue(10)}px;
`;

export const ActionImage = styled.Image`
  margin-right: ${RFValue(12)}px;
`;

export const ActionTextIcon = styled(Icon);

export const ContainerActionText = styled.View`
  width: 67%;
`;
