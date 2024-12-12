import { Note, NOTES } from '@config/music';

import { getRandomArrayElement } from './getRandomArrayElement';

export const getRandomNote = () =>
  getRandomArrayElement(NOTES as unknown as Note[]);
