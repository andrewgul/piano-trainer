import * as React from 'react';

import s from './Header.module.scss';
import { Button } from '../Button/Button';
import { SettingsPopover } from './SettingsPopover';

export const Header = (): React.ReactElement => {
  const [settingsOpened, setSettingsOpened] = React.useState(false);

  const openSettings = React.useCallback(() => {
    setSettingsOpened(true);
  }, []);

  const closeSettings = React.useCallback(() => {
    setSettingsOpened(false)
  }, []);

  return (
    <>
      <div className={s.header}>
        <div></div>
        <div>
          <Button onClick={openSettings}>Settings</Button>
        </div>
      </div>
      <SettingsPopover shown={settingsOpened} close={closeSettings} />
    </>
  );
};
