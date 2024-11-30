import * as React from 'react';
import { KeyColor, Note, NOTES_SOLFEGE_NOTATION_MAP } from '../../../../config/music';
import { playNote } from '../../../../utils/playNote';
import s from './Key.module.scss';
import clsx from 'clsx';
import { usePianoContext } from '../../context';

type Props = {
  value: Note;
  color: KeyColor;
  highlighted?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Key = ({ value, color, highlighted = true, className, style }: Props): React.ReactElement => {
  const { notation } = usePianoContext();

  return (
    <div className={clsx(s.key, className, s[`key_${color}`], { [s.key_highlighted]: highlighted })} onClick={() => playNote(value)} style={style}>
      <div className={clsx(s.value, s[`value_${color}`])}>{notation === 'letter' ? value : NOTES_SOLFEGE_NOTATION_MAP[value]}</div>
    </div>
  );
};
