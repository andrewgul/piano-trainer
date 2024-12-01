import * as React from "react";
import { Note, NOTE_PLAYING_DURATION, NOTES } from "@config/music";
import { getKeyColor } from "@utils/getKeyColor";
import clsx from "clsx";
import { countWhiteNotesBefore } from "@utils/countWhiteNotesBefore";
import { Button } from "@components/Button/Button";

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
  const [currentlyPlayingNotes, setCurrentlyPlayingNotes] = React.useState<Props['notesInChosenScale']>(null);
  const [currentlyPlayingNote, setCurrentlyPlayingNote] = React.useState<Note | null>(null);

  const playNotesInChosenScale = React.useCallback(() => {
    if (!currentlyPlayingNotes) {
      return;
    }

    currentlyPlayingNotes.forEach((note, index) => {
      setTimeout(() => {
        setCurrentlyPlayingNote(note);
        const indexOfCurrentlyPlayingNote = currentlyPlayingNotes.indexOf(note)

        if (indexOfCurrentlyPlayingNote + 1 === currentlyPlayingNotes.length) {
          setCurrentlyPlayingNotes(null);
        }
      }, NOTE_PLAYING_DURATION * 1000 * index);
    });
  }, [currentlyPlayingNotes]);

  const handlePlayScale = React.useCallback(() => {
    if (currentlyPlayingNotes) {
      return;
    }

    setCurrentlyPlayingNotes(notesInChosenScale);
  }, [currentlyPlayingNotes, notesInChosenScale]);

  React.useEffect(() => {
    if (currentlyPlayingNotes) {
      playNotesInChosenScale();
    }
  }, [currentlyPlayingNotes]);

  return (
    <div className={s.octave}>
      <Button onClick={handlePlayScale}>play scale</Button>
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
            playing={currentlyPlayingNote === note}
          />
        );
      })}
    </div>
  );
};
