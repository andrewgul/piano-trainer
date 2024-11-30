import * as React from 'react';
import { Piano } from './components/Piano';
import './main.scss';
import { Button } from './components/Button/Button';

export const App = (): React.ReactElement => {
  const [notation, setNotation] = React.useState<'letter' | 'solfedge'>('letter');

  return (
    <>
      <div style={{ marginBottom: '12px' }}>
        <Button onClick={() => setNotation(value => value === 'letter' ? 'solfedge' : 'letter')}>Notation: {notation}</Button>
      </div>
      <Piano notation={notation} />
    </>
  );
};
