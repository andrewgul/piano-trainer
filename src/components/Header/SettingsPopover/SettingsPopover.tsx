import * as React from "react";
import { SidePopover, SidePopoverProps } from "../../SidePopover";
import { FaPencilAlt } from "react-icons/fa";

import { useAppContext } from "../../../context";
import { Button } from "../../Button/Button";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

type Props = SidePopoverProps;

export const SettingsPopover = ({
  ...sidePopoverProps
}: Props): React.ReactElement => {
  const { setValue: setLocalStorageValue } = useLocalStorage();
  const { switchNotation, notation } = useAppContext();

  const handleSwitchNotation = React.useCallback(() => {
    switchNotation((newNotation) => {
      setLocalStorageValue("notation", newNotation);
    });
  }, [switchNotation, setLocalStorageValue]);

  return (
    <SidePopover {...sidePopoverProps}>
      <Button before={<FaPencilAlt />} onClick={handleSwitchNotation}>
        Notation: {notation}
      </Button>
    </SidePopover>
  );
};
