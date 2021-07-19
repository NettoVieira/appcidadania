import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  SubTitle,
  ContainerActions,
  Action,
  ActionIconImage,
  ActionIconContent,
  ActionSubtitle,
  ActionTextContent,
  ActionTitle,
  Outros,
} from './styles';

import Banner from '../../Components/Banner';

import iconajuda from '../../assets/iconajuda.png';
import iconclickpesq from '../../assets/iconclickpesq.png';
import icondiario from '../../assets/icondiario.png';
import iconeditpen from '../../assets/iconeditpen.png';
import iconLupa from '../../assets/iconLupa.png';
import iconpasta from '../../assets/iconpasta.png';
import iconfinanceiro from '../../assets/iconfinanceiro.png';

const Ferramentas: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Ferramentas</Title>
        <SubTitle>
          Tudo para organizar e facilitar seu dia a dia durante todo o seu
          processo de cidadania.
        </SubTitle>
        <ContainerActions>
          <Action>
            <ActionIconContent>
              <ActionIconImage source={iconLupa} />
            </ActionIconContent>
            <ActionTextContent>
              <ActionTitle>Encontre o antenato</ActionTitle>
              <ActionSubtitle>Faça sua pesquisa</ActionSubtitle>
            </ActionTextContent>
            <ActionIconContent>
              <Icon name="chevron-right" size={38} color="#f09d4c" />
            </ActionIconContent>
          </Action>

          <Action>
            <ActionIconContent>
              <ActionIconImage source={iconclickpesq} />
            </ActionIconContent>
            <ActionTextContent>
              <ActionTitle>Seu processo</ActionTitle>
              <ActionSubtitle>Liste seus processos e acompanhe</ActionSubtitle>
            </ActionTextContent>
            <ActionIconContent>
              <Icon name="chevron-right" size={38} color="#f09d4c" />
            </ActionIconContent>
          </Action>

          <Action>
            <ActionIconContent>
              <ActionIconImage source={iconeditpen} />
            </ActionIconContent>
            <ActionTextContent>
              <ActionTitle>Templates úteis</ActionTitle>
              <ActionSubtitle>
                Utilize os modelos de solicitações
              </ActionSubtitle>
            </ActionTextContent>
            <ActionIconContent>
              <Icon name="chevron-right" size={38} color="#f09d4c" />
            </ActionIconContent>
          </Action>

          <Action>
            <ActionIconContent>
              <ActionIconImage source={iconfinanceiro} />
            </ActionIconContent>
            <ActionTextContent>
              <ActionTitle>Controle financeiro</ActionTitle>
              <ActionSubtitle>Faça sua gestão de custos</ActionSubtitle>
            </ActionTextContent>
            <ActionIconContent>
              <Icon name="chevron-right" size={38} color="#f09d4c" />
            </ActionIconContent>
          </Action>

          <Action>
            <ActionIconContent>
              <ActionIconImage source={icondiario} />
            </ActionIconContent>
            <ActionTextContent>
              <ActionTitle>Diário da cidadania</ActionTitle>
              <ActionSubtitle>Registre sua trajetória</ActionSubtitle>
            </ActionTextContent>
            <ActionIconContent>
              <Icon name="chevron-right" size={38} color="#f09d4c" />
            </ActionIconContent>
          </Action>

          <Action>
            <ActionIconContent>
              <ActionIconImage source={iconpasta} />
            </ActionIconContent>
            <ActionTextContent>
              <ActionTitle>Monte sua pasta</ActionTitle>
              <ActionSubtitle>Organize seus documentos</ActionSubtitle>
            </ActionTextContent>
            <ActionIconContent>
              <Icon name="chevron-right" size={38} color="#f09d4c" />
            </ActionIconContent>
          </Action>

          <Outros>Outros serviços</Outros>

          <Action>
            <ActionIconContent>
              <ActionIconImage source={iconajuda} />
            </ActionIconContent>
            <ActionTextContent>
              <ActionTitle>Ajuda</ActionTitle>
              <ActionSubtitle>Agende um horário</ActionSubtitle>
            </ActionTextContent>
            <ActionIconContent>
              <Icon name="chevron-right" size={38} color="#f09d4c" />
            </ActionIconContent>
          </Action>
        </ContainerActions>
      </Container>
      <Banner unitid="ca-app-pub-9617296364015895/2996859856" />
    </>
  );
};

export default Ferramentas;
