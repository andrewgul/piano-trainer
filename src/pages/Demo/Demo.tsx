import * as React from "react";
import { Piano } from "@components/Piano";
import { Button } from "@components/Button/Button";
import { Header } from "@components/Header";
import { Note, NOTES, Scale, SCALES } from "@config/music";
import { getNotatedNote } from "@utils/getNotatedNote";

import s from "./Demo.module.scss";

import { useAppContext } from "@/context";

export const Demo = (): React.ReactElement => {
  const { notation } = useAppContext();
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
    <>
      <Header />
      <div className={s.container}>
        <div className={s.control}>
          <div className={s["button-group"]}>
            {SCALES.map((scale) => (
              <Button
                onClick={() => handleChangeScale(scale)}
                selected={selectedScale === scale}
              >
                {scale}
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
                {getNotatedNote(note, notation)}
              </Button>
            ))}
          </div>
          <div className={s['button-group']}>
            <Button onClick={handleReset}>reset</Button>
          </div>
        </div>
        <Piano
          notation={notation}
          scale={selectedScale}
          rootNote={selectedRootNote}
        />
      </div>
    </>
  );
};
