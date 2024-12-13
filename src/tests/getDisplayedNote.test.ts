/* eslint-disable @typescript-eslint/no-explicit-any */

import { describe, test, expect } from 'vitest';
import { getDisplayedNote } from '@utils/getDisplayedNote';

describe('getDisplayedNote', () => {
  test('returns right result without config', () => {
    expect(getDisplayedNote('C#')).toBe('C♯');
  });

  test('returns right result with solfege notation', () => {
    expect(getDisplayedNote('C#', { notation: 'solfege' })).toBe('Do♯');
  });

  test('returns right result with flat altered note', () => {
    expect(getDisplayedNote('C#', { alteredNotes: 'b' })).toBe('D♭');
  });

  test('returns right result with solfege notation & flat altered note', () => {
    expect(
      getDisplayedNote('C#', { alteredNotes: 'b', notation: 'solfege' }),
    ).toBe('Re♭');
  });

  test('returns right result with solfege notation & both altered notes', () => {
    expect(
      getDisplayedNote('C#', { alteredNotes: 'both', notation: 'solfege' }),
    ).toBe('Do♯ Re♭');
  });

  test('throws error if note is not provided', () => {
    expect(() => getDisplayedNote(undefined as any)).toThrowError();
  });
});
