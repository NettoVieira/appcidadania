/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../../pages/Home';
import Ferramentas from '../../pages/Ferramentas';
import Diario from '../../pages/Diario';
import Ajuda from '../../pages/Ajuda';

const Tab = createBottomTabNavigator();

const Dashboardroutes: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        cardStyle: {backgroundColor: '#fff'},

        tabBarIcon: ({color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Ferramentas':
              iconName = 'settings';
              break;
            case 'Diário':
              iconName = 'book';
              break;
            case 'Ajuda':
              iconName = 'message-circle';
              break;
            default:
              iconName = 'list';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f09d4c',
        inactiveTintColor: '#9f9faf',
        tabStyle: {
          backgroundColor: '#f2f2f9',
        },
        style: {
          height: 80,
        },
        iconStyle: {
          marginTop: 25,
        },
        labelStyle: {
          margin: 12,
          fontSize: 12,
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Ferramentas" component={Ferramentas} />
      <Tab.Screen name="Diário" component={Diario} />
      <Tab.Screen name="Ajuda" component={Ajuda} />
    </Tab.Navigator>
  );
};

export default Dashboardroutes;
