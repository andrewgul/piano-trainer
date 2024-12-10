import * as React from 'react';

export const useFlag = (initial = false) => {
  const [flag, setFlag] = React.useState(initial);

  const setTrue = React.useCallback(() => {
    setFlag(true);
  }, []);

  const setFalse = React.useCallback(() => {
    setFlag(false);
  }, []);

  const toggleFlag = React.useCallback(() => {
    setFlag((prev) => !prev);
  }, []);

  return { flag, setTrue, setFalse, setFlag, toggleFlag };
};
