import React, { useCallback, useEffect, useRef, useState } from 'react';
import { transform } from 'typescript';
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
  const wrapper = useRef<HTMLDivElement>(null!);
  const isStart = useRef<boolean>(false);

  const [transform, setTransform] = useState(0);

  const handleScroll = useCallback(() => {
    const wrapperRect = wrapper.current.getBoundingClientRect();
    console.log(window.scrollY);
    console.log(wrapper.current.offsetTop);

    //start emit
    if (
      wrapperRect.y < 100 &&
      wrapperRect.bottom > 0 &&
      isStart.current === false
    ) {
      start();
    }

    // end emit
    if (
      (wrapperRect.bottom < 0 || wrapperRect.y > 100) &&
      isStart.current === true
    ) {
      end();
    }

    if (isStart.current === true) {
      setTransform(window.scrollY - wrapper.current.offsetTop + 100);
    }
  }, []);

  const start = () => {
    console.log('start fired');
    isStart.current = true;
  };
  const end = () => {
    console.log('end fired');
    isStart.current = false;
    setTransform(0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Wrapper ref={wrapper}>
      <Container style={{ transform: `translateY(${transform * 0.5}px)` }}>
        <SliderContainer>
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
