import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { percentageContext } from '../ScrollRangePercent/ScrollRangePercent';
import graphLineSegmentMaker from '../../helper/graphLineSegmentMaker';
import BezierEasing from 'bezier-easing';

interface props extends React.SVGProps<SVGPathElement> {
  lineSegmentPoint?: [number, number][];
  cubicBezierPoint?: [x1: number, y1: number, x2: number, y2: number];
  percentStartAt?: number;
  percentEndAt?: number;
}

export const Path: React.FC<props> = ({
  lineSegmentPoint,
  cubicBezierPoint,
  ...props
}) => {
  const scrollPercent = useContext(percentageContext);

  const pathDom = useRef<SVGPathElement>(null!);

  const [pathLength, setPathLength] = useState(0);
  const [graph, setGraph] = useState<(percentIn: number) => number>(
    () => (num: number) => num,
  );

  useLayoutEffect(() => {
    const pathLength = pathDom.current.getTotalLength();
    setPathLength(pathLength);
    pathDom.current.style.strokeDasharray = pathLength.toString();
  }, []);

  useEffect(() => {
    if (lineSegmentPoint) {
      setGraph(() => graphLineSegmentMaker(lineSegmentPoint));
    } else if (cubicBezierPoint) {
      setGraph(() => BezierEasing(...cubicBezierPoint));
    }
  }, [cubicBezierPoint, lineSegmentPoint]);

  useEffect(() => {
    console.log(scrollPercent);

    pathDom.current.style.strokeDashoffset =
      (1 - graph(scrollPercent)) * pathLength + 'px';
  }, [graph, pathLength, scrollPercent]);

  return <Path ref={pathDom} {...props} />;
};
