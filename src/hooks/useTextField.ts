import { useState, useCallback, useEffect } from 'react';

type TUseTextField = (
  defaultValue?: string,
) => {
  value: string;
  changeValue: TChangeValue;
  resetValue: () => void;
};

type TChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => void;

export const useTextField: TUseTextField = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const changeValue: TChangeValue = useCallback(event => {
    setValue(event.currentTarget.value);
  }, []);

  const resetValue = useCallback(() => {
    setValue('');
  }, []);

  return { value, changeValue, resetValue };
};
