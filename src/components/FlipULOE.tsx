import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import {
  Wrapper,
  SliderContainer,
  TL,
  TR,
  BL,
  BR,
  Container,
} from './Flip.styled';

export default function Flip() {
  const wrapperDom = useRef<HTMLDivElement>(null!);
  const containerDom = useRef<HTMLDivElement>(null!);
  const topContainerDom = useRef<HTMLDivElement>(null!);

  const [percentage, setPercentage] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isInActiveArea, setIsInActiveArea] = useState(false);

  console.log(percentage);

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
    const containerRect = containerDom.current.getBoundingClientRect();

    const hStart = 0; //TODO:
    const hEnd = containerRect.height;
    const yStart = wrapperDom.current.offsetTop + hStart;
    const yEnd =
      wrapperDom.current.offsetTop + wrapperDom.current.offsetHeight - hEnd;

    // console.log(scrollY + containerRect.y); //! it always the value from start of the page to top of container
    // console.log(
    //   (scrollY - wrapperDom.current.offsetTop) /
    //     wrapperDom.current.offsetHeight,
    // );
    setPercentage(
      (scrollY + hEnd - wrapperDom.current.offsetTop) /
        wrapperDom.current.offsetHeight,
    );

    if (scrollY >= yStart && scrollY < yEnd) {
      setIsInActiveArea(true);
    } else {
      setIsInActiveArea(false);
    }
  }, [scrollY]);

  useEffect(() => {
    topContainerDom.current.style.opacity = `${1 - percentage}`;
  }, [percentage]);

  return (
    <Wrapper ref={wrapperDom}>
      <Container ref={containerDom}>
        <SliderContainer ref={topContainerDom}>
          <TL />
          <TR />
        </SliderContainer>
        <SliderContainer>
          <BL />
          <BR />
        </SliderContainer>
      </Container>
    </Wrapper>
  );
}
