import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView`
  margin-top: 10%;
  padding: ${RFValue(5)}px ${RFValue(24)}px ${RFValue(0)}px ${RFValue(24)}px;
`;

export const ContainerTitle = styled.View`
  width: 80%;
  margin-bottom: ${RFValue(20)}px;
`;

export const Close = styled.Pressable`
  width: 400px;
  margin-top: 2%;
  justify-content: flex-start;
`;

export const CloseText = styled.Image`
  height: 35px;
`;

export const ContainerHeader = styled.View`
  width: 100%;
`;
export const ContainerImage = styled.View`
  align-items: center;
`;

export const ImageLapis = styled.Image`
  margin-top: 20.5%;

  position: absolute;
  height: 230px;
  width: 270px;
`;

export const Backgroudimg = styled.Image`
  width: 100%;
  border-radius: 20px;
  height: 330px;
  position: absolute;
`;

export const ContainerOptions = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Poppins-Regular';
  color: #172239;
`;

export const ModalTitle = styled.Text`
  font-size: 25px;
  text-align: center;
  font-family: 'Poppins-Regular';
  color: #172239;

  font-weight: 900;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ContainerBodyModal = styled.View`
  width: 100%;
  margin-top: 72%;
  padding: ${RFValue(24)}px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  font-size: ${RFValue(12)}px;
  font-family: 'Poppins-Regular';
`;

export const ButtonContinuaModal = styled.TouchableOpacity`
  background-color: #f09d4c;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 10px;
  margin-top: 20px;
`;

export const ButtonTextModal = styled.Text`
  font-size: 18px;
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

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
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
  background-color: #fae8e8;
  justify-content: center;
  align-items: center;
  height: ${RFValue(65)}px;
  border-radius: 10px;
  margin-top: 4%;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #242424;
  font-family: 'Poppins-Regular';
`;

export const TitleOpacity = styled.Text`
  font-family: 'Poppins-Regualr';
  font-size: ${RFValue(14)}px;
  color: #b2b2b2;
  margin-top: 1%;
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
