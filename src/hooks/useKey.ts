import * as React from 'react';

type Params = {
  keyboardKey: string;
  onKeyPress?: VoidFunction;
  onKeyDown?: VoidFunction;
  onKeyUp?: VoidFunction;
};

export const useKey = ({
  keyboardKey,
  onKeyDown,
  onKeyPress,
  onKeyUp,
}: Params) => {
  React.useEffect(() => {
    const listenerKeyPress = (event: KeyboardEvent) => {
      if (event.key === keyboardKey) {
        onKeyPress?.();
      }
    };

    const listenerKeyDown = (event: KeyboardEvent) => {
      if (event.key === keyboardKey) {
        onKeyDown?.();
      }
    };

    const listenerKeyUp = (event: KeyboardEvent) => {
      if (event.key === keyboardKey) {
        onKeyUp?.();
      }
    };

    document.addEventListener('keypress', listenerKeyPress);
    document.addEventListener('keydown', listenerKeyDown);
    document.addEventListener('keyup', listenerKeyUp);

    return () => {
      document.removeEventListener('keypress', listenerKeyPress);
      document.removeEventListener('keydown', listenerKeyDown);
      document.removeEventListener('keyup', listenerKeyUp);
    };
  }, [keyboardKey, onKeyDown, onKeyPress, onKeyUp]);
};
