import * as React from 'react';

import s from './WhiteNote.module.scss';

type Props = {
  value: string;
  className?: string;
};

export const WhiteNote = ({ value }: Props): React.ReactElement => {
  return (
    <div className={s['white-note']}>
      <div className={s.value}>
        {value}
      </div>
    </div>
  );
};
