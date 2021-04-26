/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
  Container,
  Titulo,
  Descricao,
  ContainerText,
  Icone,
  GoBackIcon,
  ContainerTitle,
} from './styles';

import IconButtonEmissao from '../../assets/icon-buttonemissao.png';

interface ButtonEmissaoprops extends TouchableOpacityProps {
  Header: string;
  Text: string;
}

const ButtonsPasso3: React.FC<ButtonEmissaoprops> = ({
  Header,
  Text,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Icone source={IconButtonEmissao} />
      <ContainerText>
        <ContainerTitle>
          <Titulo>{Header}</Titulo>
        </ContainerTitle>
        <Descricao>{Text}</Descricao>
      </ContainerText>
      <GoBackIcon name="chevron-right" size={35} color="#db822b" />
    </Container>
  );
};

export default ButtonsPasso3;
