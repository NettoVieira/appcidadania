import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  margin-top: 10%;
`;

export const Subtitle = styled.Text`
  margin-top: 18px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  font-size: 20px;
`;

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

export const ContainerHeader = styled.View`
  margin-left: 5%;
  margin-right: 5%;
`;

export const ContainerBody = styled.View`
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
`;

export const ContainerFooter = styled.View`
  margin-top: 25%;
  margin-left: 5%;
  margin-right: 5%;
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

export const Image = styled.Image``;

export const Progresbar = styled.Image`
  width: 100%;
  height: 10px;
`;

export const TitleOpacity = styled.Text`
  font-family: 'Poppins-Regualr';
  font-size: 18px;
  color: #b2b2b2;
  margin-top: 28px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  margin-top: 9px;
  font-size: 13px;
  font-family: 'Poppins-Regular';
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 32px;
  color: #172239;
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
  width: 280px;
  height: 360px;
`;

export const Backgroudimg = styled.Image`
  width: 100%;
  height: 380px;
  position: absolute;
  border-radius: 20px;
`;

export const ContainerOptions = styled.View`
  width: 100%;
`;

export const ModalTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-family: 'Poppins-Regular';
  color: #172239;
  font-weight: 900;
  margin-top: 10px;
`;

export const ContainerBodyModal = styled.View`
  width: 100%;
  margin-top: 90%;
  padding-right: 3%;
  padding-left: 3%;
`;

export const Close = styled.Pressable`
  width: 400px;
  margin-top: 2%;
  justify-content: flex-start;
`;

export const CloseText = styled.Image`
  height: 35px;
`;

export const ButtonTextModal = styled.Text`
  font-size: 18px;
  color: #fff;
  font-family: 'Poppins-Medium';
`;

export const ParagraphModal = styled.Text`
  color: #6d6d78;
  margin-top: 4%;
  font-size: 15px;
  text-align: center;
  font-family: 'Poppins-Regular';
`;

export const ButtonContinuaModal = styled.TouchableOpacity`
  background-color: #f09d4c;
  justify-content: center;
  align-items: center;
  height: 55px;
  border-radius: 10px;
  margin-top: 32px;
`;
