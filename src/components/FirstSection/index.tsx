import {
  ContentContainer,
  FirstSectionContainer,
  ImgContainer,
  CardFirstSectionContainer,
} from "./FirstSection.styled";
import drAhmadImg from "../../assets/image/dr-ahmad.jpg";
import { LineOnScroll } from "../LineOnScroll";
import { Svg } from "../LineOnScroll/Svg";
import { Path } from "../LineOnScroll/Path";
import ScrollRangePercent from "../ScrollRangePercent";
import styled from "styled-components";
import { HorizontalScroll } from "../HorizontalScroll";

export const ScrollAnimation = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  z-index: 10;

  pointer-events: none;

  /* background-color: #5ff; */
`;

export const FirstSection = () => {
  return (
    <FirstSectionContainer id="about-us">
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
              viewBox="0 0 1349 416"
              fill="none"
              preserveAspectRatio="none"
            >
              <Path
                d="M 215.67 0 c -63.88 53.79 -102.94 135.23 -105.17 212.78 c -2.48 86.4 41.11 155.78 86.17 203.22"
                stroke="black"
                strokeWidth="3"
                strokeMiterlimit="10"
              />
            </Svg>
          </LineOnScroll>
        </ScrollRangePercent>
      </ScrollAnimation>

      <ScrollRangePercent>
        <HorizontalScroll topSticky={100}>
          <div style={{ overflow: "hidden" }}>
            <CardFirstSectionContainer>
              <ImgContainer>
                <img src={drAhmadImg} alt="dr ahmad img" />
              </ImgContainer>
              <ContentContainer>
                <h1>Dr Ahmad Mohammad</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>
                  Nunc vulputate libero et velit interdum, ac aliquet odio
                  mattis.
                </p>
                <p>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </ContentContainer>
            </CardFirstSectionContainer>
          </div>
        </HorizontalScroll>
      </ScrollRangePercent>
    </FirstSectionContainer>
  );
};
