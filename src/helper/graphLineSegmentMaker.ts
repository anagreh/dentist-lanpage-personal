interface ILineEq {
  eq: (percentIn: number) => number;
  range: [minNum: number, maxNum: number];
}

// TODO: add scale to eq range by divide m with scale

export default function graphLineSegmentMaker(graphPoint: [number, number][]) {
  // const newGraphPoint = Array.from(graphPoint);
  const filteredGraphPoint = graphPoint.filter(
    (value) => value[0] >= 0 && value[0] <= 1,
  );
  filteredGraphPoint.sort((a, b) => a[0] - b[0]);

  if (filteredGraphPoint[0][0] !== 0) filteredGraphPoint.unshift([0, 0]);
  if (filteredGraphPoint[1][0] !== 1) filteredGraphPoint.push([1, 1]);
  const eqs: ILineEq[] = [];

  for (let i = 0; i < filteredGraphPoint.length - 1; i++) {
    const point1 = filteredGraphPoint[i];
    const point2 = filteredGraphPoint[i + 1];

    const range: [number, number] = [point1[0], point2[0]];

    const eq = (percentIn: number) => {
      const m = (point2[1] - point1[1]) / (point2[0] - point1[0]);

      return (percentIn - point1[0]) * m + point1[1];
    };
    eqs.push({ eq, range });
  }

  return (percentIn: number): number => {
    if (percentIn > 1) percentIn = 1;
    if (percentIn < 0) percentIn = 0;
    for (let i = 0; i < eqs.length; i++) {
      const eq = eqs[i];

      if (percentIn <= eq.range[1]) return eq.eq(percentIn);
      // else if (percentIn > 1) return eq
    }
    return percentIn;
  };
}
