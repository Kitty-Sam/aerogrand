import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { RoutesNav } from './components/routesNav/RoutesNav';
import { ReturnComponentType } from './types';

export const enum MAP_PATH {
  login = '/',
  map = 'map',
  recover = 'recover',
}
export const App: FC = (): ReturnComponentType => (
  <div>
    <NavLink to={MAP_PATH.login}>login</NavLink>---
    <NavLink to={MAP_PATH.map}>map</NavLink>---
    <NavLink to={MAP_PATH.recover}>recover</NavLink>---
    <RoutesNav />
  </div>
);
