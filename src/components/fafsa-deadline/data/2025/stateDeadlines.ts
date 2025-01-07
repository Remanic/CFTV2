import { StateDeadline } from './types';
import { usStates } from './regions/usStates';
import { canadianProvinces } from './regions/canadianProvinces';
import { territories } from './regions/territories';

export const stateDeadlines2025: StateDeadline[] = [
  ...usStates,
  ...canadianProvinces,
  ...territories
];

export type { StateDeadline };