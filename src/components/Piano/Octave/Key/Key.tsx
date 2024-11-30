import * as React from 'react';
import { KeyColor, Note } from '../../../../config/music';
import { playNote } from '../../../../utils/playNote';
import s from './Key.module.scss';
import clsx from 'clsx';

type Props = {
  value: Note;
  color: KeyColor;
  className?: string;
  style?: React.CSSProperties;
};

export const Key = ({ value, color, className, style }: Props): React.ReactElement => {
  return (
    <div className={clsx(s.key, className, s[`key_${color}`])} onClick={() => playNote(value)} style={style}>
      <div className={clsx(s.value, s[`value_${color}`])}>{value}</div>
    </div>
  );
};
