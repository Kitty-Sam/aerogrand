import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { MAP_PATH } from '../../App';
import { ReturnComponentType } from '../../types';
import { Recover } from '../recover/Recover';

import { Login } from 'components/login/Login';
import { CommonMap } from 'components/map/CommonMap';

export const RoutesNav = (): ReturnComponentType => (
  <Routes>
    <Route path={MAP_PATH.login} element={<Login />} />
    <Route path={MAP_PATH.map} element={<CommonMap />} />
    <Route path={MAP_PATH.recover} element={<Recover />} />
  </Routes>
);
