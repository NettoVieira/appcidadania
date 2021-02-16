import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 38px;
  font-family: 'Poppins-Regular';
  text-align: center;
`;

export const Img = styled.Image`
  height: 360px;
  width: 390px;
  margin-bottom: 15px;
`;

export const Texto = styled.Text`
  color: #6d6d78;
  font-size: 15px;
  margin: 0 15px 0 15px;
  text-align: center;
`;

export const Marcador = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;

export const MarcadorText1 = styled.Text`
  margin: 2px;
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: #eaeaea;
`;

export const MarcadorText2 = styled.Text`
  margin: 2px;
  height: 8px;
  width: 18px;
  border-radius: 50px;
  background-color: #f09d4c;
`;

export const MarcadorText3 = styled.Text`
  margin: 2px;
  height: 8px;
  width: 8px;
  border-radius: 50px;
  background-color: #eaeaea;
`;

export const ButtonContinue = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #fae8e8;
  height: 50px;
  margin-bottom: 10%;
  margin-left: 7%;
  margin-right: 7%;
  border-radius: 10px;
`;

export const ButtonContinueText = styled.Text`
  font-size: 18px;
  font-family: 'Poppins-Medium';
  color: #db822b;
`;
