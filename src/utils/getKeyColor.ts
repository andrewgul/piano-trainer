import { Note, KeyColor } from '../config/music';

export const getKeyColor = (note: Note): KeyColor => note.endsWith('#') ? 'black' : 'white';