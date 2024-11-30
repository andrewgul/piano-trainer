import * as React from 'react';
import s from './Piano.module.scss';
import { Octave } from './Octave';

export const Piano = (): React.ReactElement => {
  return (
    <div className={s.container}>
      <Octave />
    </div>
  );
};