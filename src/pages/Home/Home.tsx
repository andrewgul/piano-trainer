import * as React from 'react';
import { IoIosConstruct } from 'react-icons/io';
import { Button } from '@components/Button/Button';
import { PATHS } from '@config/paths';
import { FormContainer } from '@components/FormContainer';

import { CenteredLayout } from '@/layouts/CenteredLayout/CenteredLayout';

const MENU: { title: string; link: string; icon?: React.ReactNode }[] = [
  { title: 'Demo', link: PATHS.demo.getPath(), icon: <IoIosConstruct /> },
];

export const Home = (): React.ReactElement => {
  return (
    <CenteredLayout>
      <FormContainer>
        {MENU.map((item) => (
          <Button key={item.link} before={item.icon} to={item.link} stretched>
            {item.title}
          </Button>
        ))}
      </FormContainer>
    </CenteredLayout>
  );
};
