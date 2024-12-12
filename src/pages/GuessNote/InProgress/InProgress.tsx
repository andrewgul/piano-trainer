import { Piano } from '@components/Piano';
import * as React from 'react';
import { getRandomNote } from '@utils/getRandomNote';
import { usePlayNote } from '@hooks/usePlayNote';
import { FormContainer } from '@components/FormContainer';
import { Button } from '@components/Button/Button';
import { Note } from '@config/music';
import { If } from '@components/If';
import { FaPlay } from 'react-icons/fa6';
import { GrFormNextLink } from 'react-icons/gr';

import s from './InProgress.module.scss';

import { CenteredLayout } from '@/layouts/CenteredLayout/CenteredLayout';

export const InProgress = (): React.ReactElement => {
  const { play, playingNote } = usePlayNote();
  const [currentNote, setCurrentNote] = React.useState(getRandomNote());
  const [currentGuess, setCurrentGuess] = React.useState<Note | null>(null);
  const [result, setResult] = React.useState<{ total: number; right: number }>({
    total: 0,
    right: 0,
  });

  const next = React.useCallback(() => {
    setResult(({ total, right }) => ({
      total: total + 1,
      right: currentNote === currentGuess ? right + 1 : right,
    }));

    setCurrentGuess(null);
    setCurrentNote(getRandomNote());
  }, [currentNote, currentGuess]);

  const guess = React.useCallback(
    (note: Note) => {
      if (currentGuess) {
        return;
      }

      setCurrentGuess(note);
    },
    [currentGuess],
  );

  const handlePlay = React.useCallback(() => {
    play(currentNote);
  }, [currentNote, play]);

  return (
    <CenteredLayout direction="vertical" spacing="xxl">
      <FormContainer title={`Guess the Note! ${result.right}/${result.total}`}>
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
        <Button
          stretched
          before={<FaPlay />}
          disabled={Boolean(currentGuess)}
          onClick={handlePlay}
        >
          Play
        </Button>
        <Button
          stretched
          before={<GrFormNextLink />}
          disabled={!currentGuess}
          onClick={next}
        >
          Next
        </Button>
      </FormContainer>
      <Piano octaves={1} playingNote={playingNote} onPlayNote={guess} />
    </CenteredLayout>
  );
};
