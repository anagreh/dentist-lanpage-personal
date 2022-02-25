import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LineContainer } from './LineContainer.styled';

interface IProps {
  percentage: number;
  children: JSX.Element;
}

export const LineOnScroll: React.FC<IProps> = ({ percentage, children }) => {
  const container = useRef<HTMLDivElement>(null!);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    console.log(container.current.childNodes[0].childNodes);
  }, [children]);
  // useEffect(() => {
  //   const pathLength = path.current.getTotalLength();
  //   setPathLength(pathLength);
  //   path.current.style.strokeDasharray = pathLength.toString();
  // }, []);

  // useEffect(() => {
  //   path.current.style.strokeDashoffset = (1 - percentage) * pathLength + 'px';
  // }, [pathLength, percentage]);

  return <LineContainer ref={container}>{children}</LineContainer>;
};
