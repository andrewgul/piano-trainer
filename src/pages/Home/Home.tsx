import * as React from 'react';
import { IoIosConstruct } from 'react-icons/io';
import { Button } from '@components/Button/Button';
import { PATHS } from '@config/paths';

import s from './Home.module.scss';

const MENU: { title: string; link: string; icon?: React.ReactNode }[] = [
  { title: 'Demo', link: PATHS.demo.getPath(), icon: <IoIosConstruct /> },
];

export const Home = (): React.ReactElement => {
  return (
    <div className={s.container}>
      <div className={s.menu}>
        {MENU.map((item) => (
          <Button key={item.link} before={item.icon} to={item.link}>
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
};
