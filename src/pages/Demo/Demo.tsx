import * as React from 'react';
import { Piano } from '@components/Piano';
import { Button } from '@components/Button/Button';
import { ChordInScale, Note, NOTES, Scale } from '@config/music';
import { useAppContext } from '@components/App/context';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaEllipsisH } from 'react-icons/fa';
import { usePlayScale } from '@hooks/usePlayScale';
import { Select } from '@components/Select';
import { Option } from '@typings/Option';
import { FormContainer } from '@components/FormContainer';
import { ChordSelector } from '@components/ChordSelector/ChordSelector';

import s from './Demo.module.scss';

import { CenteredLayout } from '@/layouts/CenteredLayout/CenteredLayout';

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
  const [selectedChord, setSelectedChord] = React.useState<ChordInScale | null>(
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

  const disableControls = !selectedRootNote || !selectedScale || playing;

  return (
    <CenteredLayout direction="vertical" spacing="xxl">
      <FormContainer
        title="Settings"
        actions={
          <>
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
          </>
        }
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
      </FormContainer>
      <Piano
        notation={notation}
        scale={selectedScale}
        rootNote={selectedRootNote}
        alteredNotes={alteredNotes}
        playingNote={playingNote}
        chord={selectedChord}
      />
      {selectedScale && selectedRootNote && (
        <ChordSelector
          selectedChord={selectedChord}
          onChordSelect={setSelectedChord}
          scale={selectedScale}
          rootNote={selectedRootNote}
          className={s.chords}
        />
      )}
    </CenteredLayout>
  );
};
