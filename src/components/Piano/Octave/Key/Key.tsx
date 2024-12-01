import * as React from "react";
import { KeyColor, Note } from "@config/music";
import { playNote } from "@utils/playNote";
import clsx from "clsx";
import { MAP_KEYS_TO_KEYBOARD } from "@config/keyboard";
import { useKey } from "@hooks/useKey";
import { getDisplayedNote } from '@utils/getDisplayedNote';

import s from "./Key.module.scss";
import { usePianoContext } from "../../context";

type Props = {
  value: Note;
  octave: number;
  color: KeyColor;
  highlighted?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

export const Key = ({
  value,
  octave,
  color,
  highlighted = true,
  className,
  style,
}: Props): React.ReactElement => {
  const { notation, alteredNotes } = usePianoContext();
  const [pressed, setPressed] = React.useState(false);

  const play = React.useCallback(async () => {
    playNote(value, { octave });
  }, [value, octave]);

  const handlePressStart = React.useCallback(() => {
    setPressed(true);
  }, []);

  const handlePressEnd = React.useCallback(() => {
    setPressed(false);
  }, []);

  useKey({
    keyboardKey: MAP_KEYS_TO_KEYBOARD[`${value}${octave}`],
    onKeyPress: play,
    onKeyDown: handlePressStart,
    onKeyUp: handlePressEnd,
  });

  return (
    <div
      className={clsx(s.key, className, s[`key_${color}`], {
        [s.key_highlighted]: highlighted,
        // @todo refactor styles
        [s.key_white_pressed]: color === "white" && pressed,
        [s.key_black_pressed]: color === "black" && pressed,
      })}
      onClick={play}
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
