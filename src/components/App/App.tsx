import * as React from 'react';
import { Demo } from '@pages/Demo';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { Header } from '@components/Header';
import { PATHS } from '@config/paths';
import { GuessNote } from '@pages/GuessNote/GuessNote';

import { AppContext, useCreateAppContext } from './context';

import { AlteredNotes } from '@/typings/AlteredNotes';
import { Notation } from '@/typings/Notation';

import './main.scss';

export const App = (): React.ReactElement => {
  const { getValue: getLocalStorageValue } = useLocalStorage();

  /**
   * @todo fix typing
   */
  const context = useCreateAppContext({
    notation: getLocalStorageValue('notation') as Notation,
    alteredNotes: getLocalStorageValue('altered-notes') as AlteredNotes,
  });

  return (
    <AppContext.Provider value={context}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={PATHS.home.getPath()} element={<Home />} />
          <Route path={PATHS.demo.getPath()} element={<Demo />} />
          <Route path={PATHS.guessNote.getPath()} element={<GuessNote />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};
