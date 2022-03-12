import { useState, useEffect } from 'react';

type TValues = {
    value: number;
    delay?: number;
}

export default function useDebounce({value, delay = 500}: TValues) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
}