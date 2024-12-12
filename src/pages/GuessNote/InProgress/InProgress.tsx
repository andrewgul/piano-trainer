import { Piano } from '@components/Piano';
import * as React from 'react';
import { getRandomNote } from '@utils/getRandomNote';
import { usePlayNote } from '@hooks/usePlayNote';
import { FormContainer } from '@components/FormContainer';
import { Button } from '@components/Button/Button';
import { Note } from '@config/music';
import { If } from '@components/If';

import s from './InProgress.module.scss';

import { CenteredLayout } from '@/layouts/CenteredLayout/CenteredLayout';

export const InProgress = (): React.ReactElement => {
  const { play, playingNote } = usePlayNote();
  const [currentNote, setCurrentNote] = React.useState(getRandomNote());
  const [currentGuess, setCurrentGuess] = React.useState<Note | null>(null);

  const next = React.useCallback(() => {
    setCurrentGuess(null);
    setCurrentNote(getRandomNote());
  }, []);

  const guess = React.useCallback((note: Note) => {
    setCurrentGuess(note);
  }, []);

  const handlePlay = React.useCallback(() => {
    play(currentNote);
  }, [currentNote, play]);

  return (
    <CenteredLayout direction="vertical" spacing="xxl">
      <FormContainer title="Guess the Note!">
        <div>
          <If condition={currentGuess === currentNote}>
            You're right! It's <span className={s.right}>{currentNote}</span>
          </If>
          <If condition={currentGuess && currentGuess !== currentNote}>
            Sorry, it's not <span className={s.wrong}>{currentGuess}</span>...
            The note was <span className={s.right}>{currentNote}</span>
          </If>
          <If condition={!currentGuess}>Choose wisely!</If>
        </div>
        <Button stretched disabled={Boolean(currentGuess)} onClick={handlePlay}>
          Play
        </Button>
        <Button stretched disabled={!currentGuess} onClick={next}>
          Next
        </Button>
      </FormContainer>
      <Piano playingNote={playingNote} onPlayNote={guess} />
    </CenteredLayout>
  );
};
