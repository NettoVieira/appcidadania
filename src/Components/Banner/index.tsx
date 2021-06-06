/* eslint-disable react/prop-types */
import React from 'react';

import {BannerAd, BannerAdSize} from '@react-native-firebase/admob';

import {Container} from './styles';

interface BannerProps {
  unitid: string;
}

const Banner: React.FC<BannerProps> = ({unitid, ...rest}) => {
  return (
    <Container>
      <BannerAd size={BannerAdSize.SMART_BANNER} unitId={unitid} />
    </Container>
  );
};

export default Banner;
