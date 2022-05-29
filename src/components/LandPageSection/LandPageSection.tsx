import React from 'react';
import {
  LBContainer,
  SvgContainer,
  Content,
  ButtonsContainer,
  ImgContainer,
} from './LandPageContainer.styled';
import teethPng from '../../assets/image/teeth.png';
import { ButtonPrimary, ButtonSecondary } from '../Buttons';
import ScrollRangePercent from '../ScrollRangePercent';
import { LineOnScroll } from '../LineOnScroll';
import { Svg } from '../LineOnScroll/Svg';
import { Path } from '../LineOnScroll/Path';
import styled from 'styled-components';

export const ScrollAnimation = styled.div`
  position: absolute;
  /* background-color: lime; */

  height: 139.65px;
  width: 100%;

  bottom: 0;
`;

export const LandPageSection = () => {
  return (
    <LBContainer id="home">
      <ScrollAnimation>
        <ScrollRangePercent hStartOffset={300}>
          <LineOnScroll>
            <Svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 1348 139.65"
              fill="none"
              preserveAspectRatio="none"
            >
              <Path
                d="M987,0.89c-47.79,25.08-128.27,61.86-233,82c-253.32,48.72-379.61-51.61-516,39
		c-7.92,5.26-15.54,10.94-22.83,16.99"
                stroke="black"
                strokeWidth="3"
                // strokeMiterlimit="10"
                // vector-effect="non-scaling-stroke"
              />
            </Svg>
          </LineOnScroll>
        </ScrollRangePercent>
      </ScrollAnimation>

      <SvgContainer>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMin meet"
        >
          <path
            d="M100 0H1C1 7.5 0.5 12.8 10.5 26C23 42.5 41.5 47.5 46 52.5C50.5 57.5 54.5 72.5 65 84C75.5 95.5 93 100 97 100C100.2 100 100 100.333 100 100V1Z"
            stroke="none"
          />
        </svg>

        <ImgContainer>
          <img src={teethPng} alt="" />
        </ImgContainer>
      </SvgContainer>

      <Content>
        <h1>Al ANAGREH DENTIST </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at sint
          voluptates nulla amet obcaecati. Iusto esse incidunt libero excepturi.
        </p>
        <ButtonsContainer>
          <ButtonPrimary>Click me </ButtonPrimary>
          <ButtonSecondary>Click me</ButtonSecondary>
        </ButtonsContainer>
      </Content>
    </LBContainer>
  );
};
