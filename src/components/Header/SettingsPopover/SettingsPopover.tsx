import * as React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { SiSharp } from "react-icons/si";
import { Button } from "@components/Button/Button";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { getAlteredNotesDisplay, getNotationDisplay } from "@config/ui";
import { useAppContext } from "@components/App/context";

import s from './SettingsPopover.module.scss';
import { SidePopover, SidePopoverProps } from "../../SidePopover";

type Props = SidePopoverProps;

export const SettingsPopover = ({
  ...sidePopoverProps
}: Props): React.ReactElement => {
  const { setValue: setLocalStorageValue } = useLocalStorage();
  const { switchNotation, notation, alteredNotes, switchAlteredNotes } = useAppContext();

  const handleSwitchNotation = React.useCallback(() => {
    switchNotation((newNotation) => {
      setLocalStorageValue("notation", newNotation);
    });
  }, [switchNotation, setLocalStorageValue]);

  const handlesSwitchAlteredNotes = React.useCallback(() => {
    switchAlteredNotes((newAlteredNote) => {
      setLocalStorageValue('altered-notes', newAlteredNote);
    });
  }, [switchAlteredNotes, setLocalStorageValue])

  return (
    <SidePopover {...sidePopoverProps}>
      <div className={s.buttons}>
        <Button content="start" before={<FaPencilAlt />} onClick={handleSwitchNotation}>
          Notation: {getNotationDisplay(notation)}
        </Button>
        <Button content="start" before={<SiSharp />} onClick={handlesSwitchAlteredNotes}>
          Altered Notes: {getAlteredNotesDisplay(alteredNotes)  }
        </Button>
      </div>
    </SidePopover>
  );
};
