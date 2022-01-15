import React from 'react';

import { ReturnComponentType } from '../../types';

import styleNavigation from './Navigation.module.css';

export const Navigation = (): ReturnComponentType => (
  <div className={styleNavigation.wrapper}>
    <div className={styleNavigation.title}>
      <div>aerospace</div>
      <span>agro</span>
    </div>
    <div className={styleNavigation.lists}>
      <ul className={styleNavigation.personalList}>
        <li>Мои поля</li>
        <li>Диагностика</li>
        <li>Рекомендации</li>
        <li>Заметки</li>
      </ul>
      <ul className={styleNavigation.personalList}>
        <li>Профиль</li>
        <li>Уведомления</li>
        <li>Натсройки</li>
      </ul>
    </div>
  </div>
);
