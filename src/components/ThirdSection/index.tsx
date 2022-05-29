import React from 'react';
import styled from 'styled-components';
import { LineOnScroll } from '../LineOnScroll';
import { Svg } from '../LineOnScroll/Svg';
import { Path } from '../LineOnScroll/Path';
import ScrollRangePercent from '../ScrollRangePercent';
import { ThirdSectionContainer, ImgContainer } from './ThirdSection.styled';

export const ScrollAnimation = styled.div`
  position: absolute;
  /* background-color: green; */

  height: 100%;
  width: 100%;
  right: 0;
  bottom: 0;
`;

export const ThirdSection = () => {
  return (
    <ThirdSectionContainer>
      <ScrollAnimation>
        <ScrollRangePercent hStartOffset={300} hEndOffsetExtra={-200}>
          <LineOnScroll>
            <Svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 1350.78 320.03"
              fill="none"
              preserveAspectRatio="none"
            >
              <Path
                d="M769.06,0.03c-2.44,106.27,54.24,218.72,151.44,273.5c136.89,77.15,331.69,27.24,429-130"
                stroke="black"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </Svg>
          </LineOnScroll>
        </ScrollRangePercent>
      </ScrollAnimation>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ut!
        Accusamus dolorem, maxime necessitatibus illo aut nam ea animi eligendi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus hic
        voluptate corporis enim facere non earum, temporibus odit dolorum.
        Vitae, distinctio deserunt consequatur possimus nam dicta laudantium
        aliquam sapiente.
      </p>
      <ImgContainer>
        <img
          src="https://source.unsplash.com/500x300/?portrait&img=1"
          alt="img"
        />
      </ImgContainer>
    </ThirdSectionContainer>
  );
};
