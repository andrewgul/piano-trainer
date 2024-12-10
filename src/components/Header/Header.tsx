import * as React from 'react';
import { IconButton } from '@components/IconButton/IconButton';
import { LINKS } from '@config/links';
import { Link } from 'react-router-dom';
import { PATHS } from '@config/paths';

import s from './Header.module.scss';
import { SettingsPopover } from './SettingsPopover';

export const Header = (): React.ReactElement => {
  const [settingsOpened, setSettingsOpened] = React.useState(false);

  const openSettings = React.useCallback(() => {
    setSettingsOpened(true);
  }, []);

  const closeSettings = React.useCallback(() => {
    setSettingsOpened(false);
  }, []);

  return (
    <>
      <div className={s.header}>
        <Link to={PATHS.home.getPath()}>
          <div className={s.logo}>Piano Trainer</div>
        </Link>
        <div className={s.actions}>
          <IconButton link={LINKS.myGithub} icon="github" />
          <IconButton onClick={openSettings} icon="gear" />
        </div>
      </div>
      <SettingsPopover
        title="Settings"
        shown={settingsOpened}
        close={closeSettings}
      />
    </>
  );
};
