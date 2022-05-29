import React, { useContext, useEffect, useRef, useState } from 'react';
import { percentageContext } from '../ScrollRangePercent';
import { LineContainer } from './LineContainer.styled';

interface IProps {
  children: JSX.Element;
  zIndex?: number;
}

export const LineOnScroll: React.FC<IProps> = ({ children, zIndex }) => {
  const scrollPercent = useContext(percentageContext);

  const container = useRef<HTMLDivElement>(null!);
  const [animatedElem, setAnimatedElem] = useState<SVGPathElement[]>([]);
  // const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    const children = container.current.children[0].children;
    for (let i = 0; i < children.length; i++) {
      const element = children[i];

      if (element.tagName === 'path') {
        const newElem = element as SVGPathElement;
        setAnimatedElem((prevValue) => [...prevValue, newElem]);
      }
    }
  }, []);
  useEffect(() => {
    animatedElem.forEach((elem) => {
      const pathLength = elem?.getTotalLength();
      elem.style.strokeDasharray = pathLength.toString();
      elem.style.strokeDashoffset = (1 - scrollPercent) * pathLength + 'px';
    });
  }, [animatedElem, scrollPercent]);

  return (
    <LineContainer ref={container} zIndex={zIndex}>
      {children}
    </LineContainer>
  );
};
