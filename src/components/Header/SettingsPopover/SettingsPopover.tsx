import * as React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Button } from "@components/Button/Button";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { getNotationDisplay } from "@config/ui";

import { SidePopover, SidePopoverProps } from "../../SidePopover";

import { useAppContext } from "@/context";

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
        Notation: {getNotationDisplay(notation)}
      </Button>
    </SidePopover>
  );
};
