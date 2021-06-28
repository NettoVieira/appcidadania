import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  margin-top: 15%;
  padding: 24px;
  flex: 1;
`;

export const ContainerTitle = styled.View`
  width: 80%;
  margin-bottom: 20px;
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

export const Scroll = styled.ScrollView``;

export const Title = styled.Text`
  font-size: 30px;
  font-family: 'Poppins-Medium';
  color: #172239;
  font-weight: 900;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-SemiBold';
  color: #172239;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.Text`
  color: #6d6d78;
  font-size: 13px;
  font-family: 'Poppins-Regular';
`;

export const GoBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
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
  font-size: 10px;
  color: #15b200;
  background-color: #dbe9ee;
  border-radius: 20px;
  text-align: center;

  width: 65px;
  height: 16px;
`;

export const StatusPendente = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 10px;
  color: #ff0000;
  background-color: #fae8e8;
  border-radius: 20px;
  text-align: center;

  width: 65px;
  height: 16px;
`;

export const ContainerButton = styled.View``;
