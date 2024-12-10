import { Option } from '@typings/Option';
import * as React from 'react';
import { FaCheck } from 'react-icons/fa';
import { useFlag } from '@hooks/useFlag';
import clsx from 'clsx';

import s from './Select.module.scss';

type Props<O extends Option> = {
  options: O[];
  selectedKey: O['key'] | null;
  label?: string;
  onSelect?: (newKey: O['key'] | null) => void;
};

/**
 * @todo close on click outside
 */
export const Select = <O extends Option>({
  label,
  selectedKey,
  options,
  onSelect,
}: Props<O>): React.ReactElement => {
  const {
    flag: showOptions,
    setFalse: closeOptions,
    toggleFlag: toggleOptions,
  } = useFlag(false);

  const selectedOption = React.useMemo(
    () => options.find((option) => option.key === selectedKey),
    [selectedKey],
  );

  const handleSelect = React.useCallback(
    (option: O) => {
      if (selectedKey === option.key) {
        onSelect?.(null);
      } else {
        onSelect?.(option.key);
      }

      closeOptions();
    },
    [onSelect, closeOptions],
  );

  return (
    <div className={s.wrapper}>
      {label && <span className={s.label}>{label}</span>}
      <div className={s.selection} onClick={toggleOptions}>
        {selectedOption?.label ?? 'Select...'}
      </div>
      <div className={s['options-root']}>
        <div className={clsx(s.options, showOptions && s.options_visible)}>
          {options.map((option) => (
            // @todo component
            <div
              key={option.key}
              className={s.option}
              onClick={() => handleSelect(option)}
            >
              <span>{option.label}</span>
              {option.key === selectedKey && <FaCheck />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
