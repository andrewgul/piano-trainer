import * as React from "react";
import { Note, NOTES } from "@config/music";
import { getKeyColor } from "@utils/getKeyColor";
import clsx from "clsx";
import { countWhiteNotesBefore } from "@utils/countWhiteNotesBefore";

import { Key } from "./Key";
import s from "./Octave.module.scss";

type Props = {
  order?: number;
  notesInChosenScale?: Note[] | null;
};

export const Octave = ({
  order = 4,
  notesInChosenScale,
}: Props): React.ReactElement => {
  return (
    <div className={s.octave}>
      {NOTES.map((note) => {
        const color = getKeyColor(note);

        return (
          <Key
            octave={order}
            highlighted={
              notesInChosenScale ? notesInChosenScale.includes(note) : false
            }
            key={note}
            className={clsx(s.key, s[`key_${color}`])}
            value={note}
            color={color}
            style={
              color === "black"
                ? ({
                    "--offset": countWhiteNotesBefore(note),
                  } as React.CSSProperties)
                : undefined
            }
          />
        );
      })}
    </div>
  );
};
