import * as React from 'react';

import s from './Header.module.scss';
import { SettingsPopover } from './SettingsPopover';
import { IconButton } from '@components/IconButton/IconButton';
import { LINKS } from '@config/links';

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
        <div className={s.logo}>Piano Trainer</div>
        <div className={s.actions}>
          <IconButton link={LINKS.myGithub} icon="github" />
          <IconButton onClick={openSettings} icon="gear" />
        </div>
      </div>
      <SettingsPopover title="Settings" shown={settingsOpened} close={closeSettings} />
    </>
  );
};
