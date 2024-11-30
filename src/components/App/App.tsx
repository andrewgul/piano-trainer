import * as React from 'react';
import { Demo } from '@pages/Demo';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { Header } from '@components/Header';

import { AppContext, useCreateAppContext } from './context';

import './main.scss';

export const App = (): React.ReactElement => {
  const { getValue: getLocalStorageValue } = useLocalStorage();

  const context = useCreateAppContext({
    notation: getLocalStorageValue('notation')
  });

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
};
