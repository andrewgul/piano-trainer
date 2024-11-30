import * as React from 'react';
import s from './Piano.module.scss';
import { Octave } from './Octave';
import { PianoContext } from './context';

type Props = {
  notation?: 'letter' | 'solfedge';
};

export const Piano = ({ notation = 'letter' }: Props): React.ReactElement => {
  return (
    <PianoContext.Provider value={{ notation }}>
      <div className={s.container}>
        <Octave />
      </div>
    </PianoContext.Provider>
  );
};