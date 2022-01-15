import React from 'react';

import { ReturnComponentType } from '../../types';

import { FieldElement } from './FieldElement';
import stylePanelField from './PanelField.module.css';

export const PanelFields = (): ReturnComponentType => (
  <div className={stylePanelField.wrapper}>
    <div className={stylePanelField.inputBlock}>
      <div>Мои поля</div>
      <input placeholder="search" />
    </div>

    <div className={stylePanelField.content}>
      <FieldElement id="поле#123" type="нет культуры" action="выброс" />
      <FieldElement
        id="поле#123"
        type="пшеница твердая"
        advice="есть совет"
        action="выброс"
      />
      <FieldElement id="поле#123" type="пшеница твердая" action="засыхает" />
    </div>

    <div className={stylePanelField.addButton}>
      <button type="button">+добавить поле</button>
    </div>
  </div>
);
