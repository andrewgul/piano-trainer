import * as React from 'react';
import { SidePopover, SidePopoverProps } from '../../SidePopover';
import { FaPencilAlt } from "react-icons/fa";

import { useAppContext } from '../../../context';
import { Button } from '../../Button/Button';

type Props = SidePopoverProps;

export const SettingsPopover = ({ ...sidePopoverProps }: Props): React.ReactElement => {
  const { switchNotation, notation } = useAppContext();

  return (
    <SidePopover {...sidePopoverProps}>
      <Button before={<FaPencilAlt />} onClick={switchNotation}>Notation: {notation}</Button>
    </SidePopover>
  );
};
