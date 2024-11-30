import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PORTALS } from '../../config/portals';

import s from './SidePopover.module.scss';
import clsx from 'clsx';
import { IconButton } from '../IconButton/IconButton';

export type SidePopoverProps = {
  shown?: boolean;
  close?: VoidFunction;
} & React.PropsWithChildren;

export const SidePopover = ({ children, shown, close }: SidePopoverProps): React.ReactElement => {
  const handleBackgroundClick = React.useCallback<React.MouseEventHandler>((event) => {
    event.stopPropagation();
    close?.();
  }, [close]);

  const handlePopoverClick = React.useCallback<React.MouseEventHandler>((event) => {
    event.stopPropagation();
  }, []);

  return (
    ReactDOM.createPortal(
      <div className={clsx(s.background, { [s.background_shown]: shown })} onClick={handleBackgroundClick}>
        <div className={clsx(s.popover, { [s.popover_shown]: shown })} onClick={handlePopoverClick}>
          <IconButton className={s.close} onClick={close} icon="cross" />
          {children}
        </div>
      </div>,
      document.getElementById(PORTALS.sidePopover)!,
    )
  );
};
