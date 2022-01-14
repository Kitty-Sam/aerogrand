import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { MAP_PATH } from '../../App';
import { ReturnComponentType } from '../../types';
import { Recover } from '../recover/Recover';

import { Login } from 'components/login/Login';
import { Map } from 'components/map/Map';

export const RoutesNav = (): ReturnComponentType => (
  <Routes>
    <Route path={MAP_PATH.login} element={<Login />} />
    <Route path={MAP_PATH.map} element={<Map />} />
    <Route path={MAP_PATH.recover} element={<Recover />} />
  </Routes>
);
