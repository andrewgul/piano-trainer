import * as React from "react";
import { Note, NOTES } from "@config/music";
import s from "./Octave.module.scss";
import { Key } from "./Key";
import { getKeyColor } from "@utils/getKeyColor";
import clsx from "clsx";
import { countWhiteNotesBefore } from "@utils/countWhiteNotesBefore";

type Props = {
  order?: number;
  highlightedNotes?: Note[] | null;
};

export const Octave = ({
  order = 4,
  highlightedNotes,
}: Props): React.ReactElement => {
  return (
    <div className={s.octave}>
      {NOTES.map((note) => {
        const color = getKeyColor(note);

        return (
          <Key
            octave={order}
            highlighted={
              highlightedNotes ? highlightedNotes.includes(note) : false
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
