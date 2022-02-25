import { useState } from 'react';
import ScrollRangePercent from '../components/ScrollRangePercent/ScrollRangePercent';

const useScrollRangePercent = () => {
  const [percentage, setPercentage] = useState(0);
  const propsScrollRangePercent = { setPercentage };

  return {
    ScrollRangePercent,
    propsScrollRangePercent,
    percentage,
    setPercentage,
  };
};

export default useScrollRangePercent;
