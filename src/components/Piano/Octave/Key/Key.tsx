import * as React from 'react';
import { KeyColor, Note } from '@config/music';
import { playNote } from '@utils/playNote';
import clsx from 'clsx';
import { MAP_KEYS_TO_KEYBOARD } from '@config/keyboard';
import { useKey } from '@hooks/useKey';
import { getDisplayedNote } from '@utils/getDisplayedNote';

import s from './Key.module.scss';
import { usePianoContext } from '../../context';

type Props = {
  value: Note;
  octave: number;
  color: KeyColor;
  highlighted?: boolean;
  highlightedIntense?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Key = ({
  value,
  octave,
  color,
  highlighted = true,
  highlightedIntense,
  className,
  style,
}: Props): React.ReactElement => {
  const { notation, alteredNotes, onPlayNote } = usePianoContext();
  const [pressed, setPressed] = React.useState(false);

  const { playingNote } = usePianoContext();

  const playing = value === playingNote?.note && octave === playingNote.octave;

  const play = React.useCallback(async () => {
    playNote(value, { octave });
  }, [value, octave]);

  const handleClick = React.useCallback(() => {
    onPlayNote?.(value);
    play();
  }, [value, play, onPlayNote]);

  const handlePressStart = React.useCallback(() => {
    onPlayNote?.(value);
    setPressed(true);
  }, [value, onPlayNote]);

  const handlePressEnd = React.useCallback(() => {
    setPressed(false);
  }, []);

  useKey({
    keyboardKey: MAP_KEYS_TO_KEYBOARD[`${value}${octave}`],
    onKeyPress: play,
    onKeyDown: handlePressStart,
    onKeyUp: handlePressEnd,
  });

  React.useEffect(() => {
    if (playing) {
      play();
    }
  }, [playing, play]);

  return (
    <div
      className={clsx(s.key, className, s[`key_${color}`], {
        [s.key_highlighted]: !highlightedIntense && highlighted,
        [s['key_highlighted-intense']]: highlightedIntense,
        // @todo refactor styles
        [s.key_white_pressed]: color === 'white' && (pressed || playing),
        [s.key_black_pressed]: color === 'black' && (pressed || playing),
      })}
      onClick={handleClick}
      style={style}
      onMouseDown={handlePressStart}
      onMouseUp={handlePressEnd}
      onMouseLeave={handlePressEnd}
      onTouchStart={handlePressStart}
      onTouchEnd={handlePressEnd}
    >
      <div className={clsx(s.value, s[`value_${color}`])}>
        {getDisplayedNote(value, notation, alteredNotes)}
      </div>
    </div>
  );
};
