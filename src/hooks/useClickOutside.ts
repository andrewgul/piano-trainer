import * as React from 'react';

export const useClickOutside = <T extends HTMLElement, T2 extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  ref2?: React.RefObject<T2>,
) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        ref2?.current?.contains(event.target as Node)
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
