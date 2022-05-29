import React from "react";
import { SecSectionContainer } from "./SecSection.styled";
import { Card } from "../Card";
import styled, { css, keyframes } from "styled-components";
import { LineOnScroll } from "../LineOnScroll";
import { Svg } from "../LineOnScroll/Svg";
import { Path } from "../LineOnScroll/Path";
import ScrollRangePercent from "../ScrollRangePercent";
import { HorizontalScroll } from "../HorizontalScroll";
import { ToggleAnimAtPercent } from "../ToggleAnimAtPercent";

export const ScrollAnimation = styled.div`
  position: absolute;
  /* background-color: red; */

  height: 100%;
  width: 100%;

  bottom: 0;
`;

const swingInTopFwd = keyframes`

  0% {
    transform: translateX(0) translateZ(0) rotateY(0);
    transform-origin: center right;
    opacity:1;
  }
  100% {
    transform: translateX(-150px) translateZ(130px) rotateY(90deg);
    transform-origin: center right;
    opacity:0;

  }

`;

const swingInTopBwd = keyframes`

0% {
    transform: translateX(0) translateZ(0) rotateY(0);
    transform-origin: center right;
    opacity:1;
  }
  100% {
    transform: translateX(-150px) translateZ(130px) rotateY(90deg);
    transform-origin: center right;
    opacity:0;

  }

`;
const animationIn = css`
  animation: ${swingInTopFwd} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
    forwards;
`;
const animationOut = css`
  animation: ${swingInTopBwd} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
`;

export const SecSection = () => {
  return (
    <div id="test1" style={{ position: "relative" }}>
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
              viewBox="0 0 1349 433.05"
              fill="none"
              preserveAspectRatio="none"
            >
              <Path
                d="M196.67,1.02c35.06,37.92,71.02,63.32,86.83,74.5c97.83,69.13,200.57,67.4,398,67
		c210.07-0.42,303.93-91.79,384-35c71.18,50.48,84.73,161.43,71,169c-12.75,7.03-43.54-78.09-114-95
		c-82.08-19.7-191.74,59.46-233,155c-13.05,30.23-19.67,63.06-20.44,96.5"
                stroke="black"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </Svg>
          </LineOnScroll>
        </ScrollRangePercent>
      </ScrollAnimation>

      <ScrollRangePercent height="1000px">
        <HorizontalScroll topSticky={70}>
          <SecSectionContainer style={{ perspective: "1000px" }}>
            <ToggleAnimAtPercent
              toggleAt={0.25}
              animationIn={animationIn}
              animationOut={animationOut}
            >
              <Card
                src="https://source.unsplash.com/500x300/?portrait&img=2"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
              />
            </ToggleAnimAtPercent>
            <ToggleAnimAtPercent
              toggleAt={0.5}
              animationIn={animationIn}
              animationOut={animationOut}
            >
              <Card
                src="https://source.unsplash.com/500x300/?portrait&img=3"
                content="adipisicing elit.milique laboriosam impedit vel dolorum, quas dolorem quaerat consequatur voluptates culpa placeat amet molestias ut nobis a repellat."
              />
            </ToggleAnimAtPercent>
            <ToggleAnimAtPercent
              toggleAt={0.75}
              animationIn={animationIn}
              animationOut={animationOut}
            >
              <Card
                src="https://source.unsplash.com/500x300/?portrait&img=4"
                content=" placeat amet molestias ut nobis a repellat."
              />
            </ToggleAnimAtPercent>
          </SecSectionContainer>
        </HorizontalScroll>
      </ScrollRangePercent>
    </div>
  );
};
