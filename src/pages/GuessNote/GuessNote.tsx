import * as React from 'react';

import { InProgress } from './InProgress/InProgress';

type GameState = 'start' | 'in-progress' | 'finish';

/**
 * @todo start and finish states
 */
export const GuessNote = (): React.ReactElement | null => {
  const [gameState] = React.useState<GameState>('in-progress');

  if (gameState === 'in-progress') {
    return <InProgress />;
  }

  return null;
};
