import * as React from 'react';

import s from './BlackNote.module.scss';

type Props = {
  value: string;
  offset: number;
  className?: string;
};

export const BlackNote = ({ value, offset }: Props): React.ReactElement => {
  return (
    <div className={s['black-note']} style={{ '--offset': offset } as React.CSSProperties}>
      <div className={s.value}>
        {value}
      </div>
    </div>
  );
};
