import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 2px;
`;

export const Name = styled.Text`
  font-size: 30px;
  font-family: 'Poppins-Regular';
  margin-top: -12px;
  margin-left: 8%;
`;

export const Ciao = styled.Text`
  font-size: 23px;
  color: #6d6d78;
  margin-left: 8%;
  font-family: 'Poppins-Regular';
`;

export const ContainerPasso = styled(RectButton)`
  background-color: #f8f8f8;
  border-radius: 15px;
  margin-bottom: 25px;
  height: 28%;
  flex-direction: row;
  width: 97%;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
`;

export const Status = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 10px;
  color: #ff0000;
  background-color: #fae8e8;
  border-radius: 20px;
  text-align: center;
  margin-left: 35%;
  width: 65px;
  height: 16px;
`;

export const MarcadorText1 = styled.Image`
  height: 13px;
  margin: 1px;
  margin-top: 50px;
  width: 13px;
  border-radius: 50px;
  background-color: #ff0000;
`;

export const MarcadorText2 = styled.Image`
  margin: 1px;
  height: 13px;
  margin-top: 140px;
  width: 13px;
  border-radius: 50px;

  background-color: #ff0000;
`;

export const MarcadorText2Disable = styled.Image`
  margin: 1px;
  height: 13px;
  margin-top: 140px;
  width: 13px;
  border-radius: 50px;

  background-color: #e6e6e6;
`;

export const MarcadorText2Pendente = styled.Image`
  margin: 1px;
  height: 13px;
  margin-top: 140px;
  width: 13px;
  border-radius: 50px;

  background-color: #ff0000;
`;

export const MarcadorText3 = styled.Image`
  margin: 1px;
  height: 13px;
  width: 13px;
  margin-top: 130px;
  border-radius: 50px;
  background-color: #e6e6e6;
`;

export const ContainerPassos = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const ContainerMarcador = styled.View`
  margin-left: 10px;
  margin-right: 15px;
`;

export const Text = styled.Text`
  border: #e6e6e6;
  margin-top: 55px;
  margin-left: 6px;
  height: 295px;
`;

export const ContainerView = styled.View`
  margin-top: 10%;
`;

export const ImagemPasso1 = styled.Image`
  height: 120px;
  width: 130px;
  background-color: #f2f2f9;
  border-radius: 10px;
`;

export const PassoText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #6d6d78;
`;

export const PassoTextContainer = styled.View``;

export const ContainerHeader = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: center;
`;

export const PassoTextBold = styled.Text`
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
`;

export const TextFooter = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #6d6d78;

  margin-left: 2px;
`;

export const ContainerButtons1 = styled.View`
  height: 90px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonsAjuda = styled.TouchableOpacity`
  height: 80px;
  background-color: #fdf5ed;
  border: #f09d4c;
  width: 160px;
  margin: 5px;
  flex-direction: row;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
export const ButtonContainer = styled.View`
  width: 80px;
  justify-content: center;
  margin-left: 20px;
  align-items: center;
  height: 80px;
`;

export const ButtonsAjudaText = styled.Text`
  color: #6d6d78;
  font-size: 11px;

  font-family: 'Poppins-Regular';
`;

export const ImageIcone = styled.Image`
  height: 40px;
  width: 40px;
`;

export const ContainerFooter = styled.View`
  width: 100%;
  height: 250px;
  margin-top: 24px;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonFooter = styled(RectButton)`
  background-color: #f8f8f8;
  height: 240px;
  width: 160px;
  margin: 0 5px 0 5px;

  border-radius: 15px;
`;
export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #edf6fa;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const ButtonFooterImage = styled.Image`
  background-color: #edf6fa;
  height: 120px;
  width: 140px;
`;

export const ButtonFooterText = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #6d6d78;
  font-family: 'Poppins-Regular';
  margin-left: 16px;
`;

export const ButtonFooterTextBold = styled.Text`
  font-size: 16px;
  color: #172239;
  font-family: 'Poppins-SemiBold';
  margin-left: 16px;
`;

export const StatusConcluido = styled.Text`
  font-family: 'Poppins-Medium';
  font-size: 10px;
  color: #15b200;
  background-color: #dbe9ee;
  border-radius: 20px;
  text-align: center;
  margin-left: 5%;
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
  margin-left: 5%;
  width: 65px;
  height: 16px;
`;

export const MarcadorText3Pendente = styled.Image`
  margin: 1px;
  height: 13px;
  width: 13px;
  margin-top: 130px;
  border-radius: 50px;

  background-color: #ff0000;
`;

export const MarcadorText3Disable = styled.Image`
  margin: 1px;
  height: 13px;
  width: 13px;
  margin-top: 130px;
  border-radius: 50px;

  background-color: #e6e6e6;
`;

export const ContainerFooterPasso = styled.View``;

export const ContainerEmissoes = styled.View`
  width: 100%;
`;
