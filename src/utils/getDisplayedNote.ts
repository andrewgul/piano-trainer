import { isNaturalNote, Note, NOTE_DISPLAY_CONFIG } from '@config/music';
import { AlteredNotesDisplay } from '@typings/AlteredNotesDisplay';
import { Notation } from '@typings/Notation';

export type DisplayedNoteConfig = Partial<{
  notation: Notation;
  alteredNotes: AlteredNotesDisplay;
}>;

export const getDisplayedNote = (
  note: Note,
  { notation = 'letter', alteredNotes = '#' }: DisplayedNoteConfig = {},
): string => {
  if (isNaturalNote(note)) {
    const config = NOTE_DISPLAY_CONFIG[note];

    return config[notation];
  }

  const config = NOTE_DISPLAY_CONFIG[note];

  const sharp = `${config['#'][notation]}♯`;
  const flat = `${config['b'][notation]}♭`;

  switch (alteredNotes) {
    case '#':
      return sharp;
    case 'b':
      return flat;
    case 'both':
      return `${sharp} ${flat}`;
  }
};
