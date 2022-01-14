import { ChangeEvent, memo } from 'react';

import style from './CustomInput.module.css';

import { ReturnComponentType } from 'types';

type InputProps = {
  placeholder: string;
  typeInput: string;
  // eslint-disable-next-line react/require-default-props
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  // eslint-disable-next-line react/require-default-props
  name?: string;
  // eslint-disable-next-line react/require-default-props
  onKeyPress?: (e: any) => void;
};

export const CustomInput = memo(
  ({
    placeholder,
    typeInput,
    className,
    value,
    onChange,
    name,
    onKeyPress,
  }: InputProps): ReturnComponentType => (
    <div className={style.inputWrap}>
      <input
        size={40}
        type={typeInput}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className ?? style.input}
        autoComplete="off"
        spellCheck={false}
        aria-autocomplete="list"
        onKeyPress={onKeyPress}
      />
    </div>
  ),
);
