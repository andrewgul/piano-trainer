import * as React from 'react';
import { SidePopover, SidePopoverProps } from '../../SidePopover';

import s from './SettingsPopover.module.scss';
import { useAppContext } from '../../../context';
import { Button } from '../../Button/Button';

type Props = SidePopoverProps;

export const SettingsPopover = ({ ...sidePopoverProps }: Props): React.ReactElement => {
  const { switchNotation, notation } = useAppContext();

  return (
    <SidePopover {...sidePopoverProps}>
      <div className={s.content}>
        <Button onClick={switchNotation}>notation: {notation}</Button>
      </div>
    </SidePopover>
  );
};
