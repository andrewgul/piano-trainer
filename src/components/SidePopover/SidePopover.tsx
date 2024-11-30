import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PORTALS } from '@config/portals';
import clsx from 'clsx';
import { IconButton } from '@components/IconButton/IconButton';

import s from './SidePopover.module.scss';

export type SidePopoverProps = {
  title: string;
  shown?: boolean;
  close?: VoidFunction;
} & React.PropsWithChildren;

export const SidePopover = ({ children, shown, title, close }: SidePopoverProps): React.ReactElement => {
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
          <div className={s.header}>
            <div className={s.title}>{title}</div>
            <IconButton className={s.close} onClick={close} icon="cross" />
          </div>
          <div className={s['content-container']}>
            <div className={s.content}>
              {children}
            </div>
          </div>
        </div>
      </div>,
      document.getElementById(PORTALS.sidePopover)!,
    )
  );
};
