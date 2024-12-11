import * as React from 'react';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useAppContext } from '@components/App/context';
import { Container } from '@components/Container';
import { Select } from '@components/Select';
import { Option } from '@typings/Option';
import { Notation } from '@typings/Notation';
import { AlteredNotes } from '@typings/AlteredNotes';

import { SidePopover, SidePopoverProps } from '../../SidePopover';

const NOTATION_OPTIONS: Option<Notation>[] = [
  {
    key: 'letter',
    label: 'Letter (C, D, E...)',
  },
  {
    key: 'solfedge',
    label: 'Solfedge: (Do, Re, Mi...)',
  },
];

const ALTERED_NOTES_OPTION: Option<AlteredNotes>[] = [
  {
    key: '#',
    label: 'Sharps (♯)',
  },
  {
    key: 'b',
    label: 'Flats (♭)',
  },
  {
    key: 'both',
    label: 'Both (♯, ♭)',
  },
];

type Props = SidePopoverProps;

export const SettingsPopover = ({
  ...sidePopoverProps
}: Props): React.ReactElement => {
  const { setValue: setLocalStorageValue } = useLocalStorage();
  const { notation, alteredNotes, setAlteredNotes, setNotation } =
    useAppContext();

  const selectNotation = React.useCallback(
    (value: Notation | null) => {
      if (!value) {
        return;
      }

      setNotation(value);
      setLocalStorageValue('notation', value);
    },
    [setNotation, setLocalStorageValue],
  );

  const selectAlteredNotes = React.useCallback(
    (value: AlteredNotes | null) => {
      if (!value) {
        return;
      }

      setAlteredNotes(value);
      setLocalStorageValue('altered-notes', value);
    },
    [setAlteredNotes, setLocalStorageValue],
  );

  return (
    <SidePopover {...sidePopoverProps}>
      <Container direction="vertical" spacing="l" align="stretch">
        <Select
          label="Notation"
          selectedKey={notation}
          options={NOTATION_OPTIONS}
          onSelect={selectNotation}
          allowDeselect={false}
        />
        <Select
          label="Altered Notes"
          selectedKey={alteredNotes}
          options={ALTERED_NOTES_OPTION}
          onSelect={selectAlteredNotes}
          allowDeselect={false}
        />
      </Container>
    </SidePopover>
  );
};
