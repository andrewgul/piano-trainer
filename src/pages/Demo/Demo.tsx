import * as React from 'react';
import { Piano } from '@components/Piano';
import { Button } from '@components/Button/Button';
import { Note, NOTES, Scale } from '@config/music';
import { useAppContext } from '@components/App/context';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { usePlayScale } from '@hooks/usePlayScale';
import { Select } from '@components/Select';
import { Option } from '@typings/Option';
import { Container } from '@components/Container';

import s from './Demo.module.scss';

const SCALE_OPTIONS = [
  {
    label: 'Major',
    key: 'major',
  },
  {
    label: 'Minor',
    key: 'minor',
  },
] satisfies Option<Scale>[];

const ROOT_NOTE_OPTIONS: Option<Note>[] = NOTES.map((note) => ({
  label: note,
  key: note,
}));

export const Demo = (): React.ReactElement => {
  const { notation, alteredNotes } = useAppContext();
  const [selectedScale, setSelectedScale] = React.useState<Scale | null>(null);
  const [selectedRootNote, setSelectedRootNote] = React.useState<Note | null>(
    null,
  );

  const {
    play: playScale,
    playingNote,
    playing,
  } = usePlayScale({ note: selectedRootNote, scale: selectedScale });

  const handleReset = React.useCallback(() => {
    setSelectedScale(null);
    setSelectedRootNote(null);
  }, []);

  const disableControls = (!selectedRootNote && !selectedScale) || playing;

  return (
    <Container
      className={s.container}
      direction="vertical"
      align="center"
      justify="center"
    >
      <Container
        className={s.controls}
        direction="vertical"
        spacing="l"
        align="stretch"
      >
        <Select
          label="Root Note"
          options={ROOT_NOTE_OPTIONS}
          selectedKey={selectedRootNote}
          onSelect={setSelectedRootNote}
        />
        <Select
          label="Scale"
          options={SCALE_OPTIONS}
          selectedKey={selectedScale}
          onSelect={setSelectedScale}
        />
        <Container align="center" justify="space-between">
          <Button
            before={playing ? <FaEllipsisH /> : <FaPlay />}
            onClick={playScale}
            disabled={disableControls}
            stretched
          >
            {playing ? 'Playing' : 'Play'}
          </Button>
          <Button
            before={<FaTrashAlt />}
            onClick={handleReset}
            disabled={disableControls}
            stretched
          >
            Reset
          </Button>
        </Container>
      </Container>
      <Piano
        notation={notation}
        scale={selectedScale}
        rootNote={selectedRootNote}
        alteredNotes={alteredNotes}
        playingNote={playingNote}
      />
    </Container>
  );
};
