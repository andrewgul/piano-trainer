import * as React from 'react';
import { Piano } from './components/Piano';
import './main.scss';
import { Button } from './components/Button/Button';
import { Note, NOTES, Scale, SCALES } from './config/music';

export const App = (): React.ReactElement => {
  const [notation, setNotation] = React.useState<'letter' | 'solfedge'>('letter');
  const [selectedScale, setSelectedScale] = React.useState<Scale | null>(null);
  const [selectedRootNote, setSelectedRootNote] = React.useState<Note | null>(null);

  const handleChangeScale = React.useCallback((newScale: Scale | null) => {
    setSelectedScale(oldScale => oldScale === newScale ? null : newScale);
  }, []);

  const handleChangeRootNote = React.useCallback((newRootNote: Note) => {
    setSelectedRootNote(oldRootNote => oldRootNote === newRootNote ? null : newRootNote);
  }, []);

  const handleReset = React.useCallback(() => {
    setSelectedScale(null);
    setSelectedRootNote(null);
  }, []);

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <Button onClick={() => setNotation(value => value === 'letter' ? 'solfedge' : 'letter')}>Notation: {notation}</Button>
      </div>
      <div style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
        {SCALES.map((scale) => <Button onClick={() => handleChangeScale(scale)} selected={selectedScale === scale}>{scale}</Button>)}
      </div>
      <div style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
        {NOTES.map((note) => <Button onClick={() => handleChangeRootNote(note)} selected={selectedRootNote === note}>{note}</Button>)}
      </div>
      <div style={{ marginBottom: '12px' }}>
        <Button onClick={handleReset}>reset</Button>
      </div>
      <Piano notation={notation} scale={selectedScale} rootNote={selectedRootNote} />
    </>
  );
};
