import React from 'react';

import { ReturnComponentType } from '../../types';

import styleFieldElement from './FieldElement.module.css';

export type FieldElType = {
  id: string;
  type: string;
  action: string;
  advice?: string;
};

export const FieldElement = ({
  id,
  action,
  type,
  advice,
}: FieldElType): ReturnComponentType => (
  <div className={styleFieldElement.wrapper}>
    <div>{id}</div>
    <div>{type}</div>
    <div>{advice}</div>
    <div>{action}</div>
  </div>
);
