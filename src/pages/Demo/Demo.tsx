import * as React from "react";
import { Piano } from "@components/Piano";
import { Button } from "@components/Button/Button";
import { Note, NOTES, Scale, SCALES } from "@config/music";
import { getDisplayedNote } from "@utils/getDisplayedNote";
import { useAppContext } from "@components/App/context";
import { FaTrashAlt } from "react-icons/fa";
import { firstLetterToUppercase } from "@utils/firstLetterToUppercase";

import s from "./Demo.module.scss";


export const Demo = (): React.ReactElement => {
  const { notation, alteredNotes } = useAppContext();
  const [selectedScale, setSelectedScale] = React.useState<Scale | null>(null);
  const [selectedRootNote, setSelectedRootNote] = React.useState<Note | null>(
    null
  );

  const handleChangeScale = React.useCallback((newScale: Scale | null) => {
    setSelectedScale((oldScale) => (oldScale === newScale ? null : newScale));
  }, []);

  const handleChangeRootNote = React.useCallback((newRootNote: Note) => {
    setSelectedRootNote((oldRootNote) =>
      oldRootNote === newRootNote ? null : newRootNote
    );
  }, []);

  const handleReset = React.useCallback(() => {
    setSelectedScale(null);
    setSelectedRootNote(null);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.control}>
        <div className={s["button-group"]}>
          {SCALES.map((scale) => (
            <Button
              onClick={() => handleChangeScale(scale)}
              selected={selectedScale === scale}
            >
              {firstLetterToUppercase(scale)}
            </Button>
          ))}
        </div>
        <div className={s["button-group"]}>
          {NOTES.map((note) => (
            <Button
              key={note}
              onClick={() => handleChangeRootNote(note)}
              selected={selectedRootNote === note}
            >
              {getDisplayedNote(note, notation, alteredNotes)}
            </Button>
          ))}
        </div>
        {Boolean(selectedRootNote && selectedScale) && (
          <div className={s['button-group']}>
            <Button onClick={handleReset} after={<FaTrashAlt />}>Reset</Button>
          </div>
        )}
      </div>
      <Piano
        notation={notation}
        scale={selectedScale}
        rootNote={selectedRootNote}
        alteredNotes={alteredNotes}
      />
    </div>

  );
};
