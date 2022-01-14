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
    <div className={style.mainContainer}>
      <div className={style.content}>
        <span>Вход Pегистрация</span>

        <div>
          <CustomInput
            typeInput="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <CustomInput
            typeInput="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div>
          <input
            placeholder="remember me"
            type="checkbox"
            checked={rememberMe}
            onChange={onChangeCheckBoxHandler}
          />
        </div>
        <div>
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={onLoginButtonClick}>Войти</button>
        </div>
        <Link to={MAP_PATH.recover}> Забыли пароль? </Link>
      </div>
    </div>
  );
};
