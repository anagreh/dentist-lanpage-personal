import React, { useEffect, useRef, useState } from 'react';

import {
  TL,
  TR,
  BL,
  BR,
  Container,
  SliderContainerFront,
  SliderContainerBack,
} from './Flip.styled';
import { Wrapper } from './ScrollRangePercent/Wrapper.styled';

interface props {
  hStartOffset?: number;
  hEndOffsetExtra?: number;
  height?: string;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
}

export const Flip: React.FC<props> = ({
  hStartOffset = 0,
  hEndOffsetExtra = 0,
  height = '100%',
  setPercentage,
}) => {
  const wrapperDom = useRef<HTMLDivElement>(null!);
  const containerDom = useRef<HTMLDivElement>(null!);
  const frontContainerDom = useRef<HTMLDivElement>(null!);

  // const [percentage, setPercentage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handlePercentage = (percentage: number) => {
    if (percentage >= 1) setPercentage(1);
    else if (percentage <= 0) setPercentage(0);
    else setPercentage(percentage);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // TODO: move all properties that does not change to chang in scrollY
    const containerRect = containerDom.current.getBoundingClientRect();

    // all value in px
    // const hStartOffset = hStartOffset; //? height from top of wrapper to 'start transition position'
    const hEndOffset = containerRect.height + hStartOffset + hEndOffsetExtra; //? height from bottom of wrapper to 'stop transition position'
    // TODO: if yStart is negative make it 0 and make sure yEnd is higher than yStart
    const yStart = wrapperDom.current.offsetTop - hStartOffset; //? height from top of page to 'start transition position'
    const yEnd = //? height from top of page to 'stop transition position'
      wrapperDom.current.offsetTop +
      wrapperDom.current.offsetHeight -
      hEndOffset;

    containerDom.current.style.top = `${hStartOffset}px`;
    const yContainer = scrollY + containerRect.y; //? it always the value from top of the page to top of container

    handlePercentage((scrollY - yStart) / (yEnd - yStart));
  }, [hEndOffsetExtra, hStartOffset, scrollY]);

  // useEffect(() => {
  //   // topContainerDom.current.style.opacity = `${1 - percentage}`;
  //   frontContainerDom.current.style.transform = ` translateX(${
  //     -percentage * containerDom.current.offsetWidth
  //   }px)`;
  // }, [percentage]);

  return (
    <Wrapper ref={wrapperDom} height={height}>
      {/* the area that container will move in */}
      <Container ref={containerDom}>
        {/* the container that will stick to screen throw Wrapper height*/}
        <SliderContainerFront ref={frontContainerDom}>
          {/* the container that will be animated based on scroll percentage of wrapper*/}
          <TL />
          <TR />
        </SliderContainerFront>
        <SliderContainerBack>
          <BL />
          <BR />
        </SliderContainerBack>
      </Container>
    </Wrapper>
  );
};

export default Flip;
