import React from 'react';
import { LandPageSection } from '../../components/LandPageSection/LandPageSection';
import { FirstSection } from '../../components/FirstSection';
import { HomeContainer, SectionContainer } from './HomePage.styled';
import { ThirdSection } from '../../components/ThirdSection';
import { Footer } from '../../components/Footer';
import { SecSection } from '../../components/SecSection';
import ScrollRangePercent from '../../components/ScrollRangePercent';
import { LineOnScroll } from '../../components/LineOnScroll';

export const HomePage = () => {
  return (
    <HomeContainer>
      <LandPageSection />
      <FirstSection />
      <SecSection />
      <ThirdSection />
      <Footer />
    </HomeContainer>
  );
};
