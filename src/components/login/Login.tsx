import React, { ChangeEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import { MAP_PATH } from '../../App';
import { useInput } from '../../hooks/useInput/useInput';
import { ReturnComponentType } from '../../types';
import { CustomInput } from '../customInput/CustomInput';

import style from './Login.module.css';

export const Login = (): ReturnComponentType => {
  const [rememberMe, setCheckBox] = useState<boolean>(false);
  const { value: email, handleValue: handleEmail, resetValue: resetEmail } = useInput('');
  const {
    value: password,
    handleValue: handlePassword,
    resetValue: resetPassword,
  } = useInput('');

  const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setCheckBox(e.currentTarget.checked);
  };

  const onLoginButtonClick = (): void => {
    resetEmail('');
    resetPassword('');
  };

  return (
    <div className={style.bodyContainer}>
      <div className={style.mainContainer}>
        <div className={style.content}>
          <span className={style.header}>
            Вход <span className={style.registration}>Pегистрация</span>
          </span>

          <div className={style.inputBlock}>
            <CustomInput
              // className={style.input}
              typeInput="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />

            <CustomInput
              // className={style.input}
              typeInput="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            <div style={{ display: 'flex' }}>
              <input
                className={style.checkbox}
                type="checkbox"
                checked={rememberMe}
                onChange={onChangeCheckBoxHandler}
              />
              <div className={style.checkboxHeader}>Запомнить меня?</div>
            </div>
            <div />
          </div>
          <button className={style.btn} type="button" onClick={onLoginButtonClick}>
            Войти
          </button>
          <Link to={MAP_PATH.recover} className={style.link}>
            Забыли пароль?
          </Link>
        </div>
      </div>
    </div>
  );
};
