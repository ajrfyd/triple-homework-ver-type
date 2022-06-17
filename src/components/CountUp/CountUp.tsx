import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  start?: number;
  time?: number;
  end: number;
}

const CountUp = ({ start = 0, end, time = 2000 }: CountUpProps) => {
  const [number, setNumber] = useState(start);
  const numRef = useRef(start);

  const timer = Math.ceil(time / end);
  const slowTriggerNum = end - 5;
  const accumulator = 1;

  const updateState = () => {
    if (numRef.current < end) {
      const result = numRef.current + accumulator;

      if (result > end) {
        setNumber(end);
      }

      if (result !== number) {
        setNumber(result);
        numRef.current = result;
      }
    }

    if (numRef.current !== end) {
      if (numRef.current <= slowTriggerNum) {
        setTimeout(updateState, timer);
      } else {
        setTimeout(updateState, 200);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      updateState();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  return <>{number}</>;
};

export default CountUp;
