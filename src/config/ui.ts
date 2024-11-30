import { Notation } from "../types/Notation";

export const NOTATION_DISPLAY: Record<Notation, string> = {
  letter: 'Letter (C, D, E...)',
  solfedge: 'Solfedge: (Do, Re, Mi...)'
}

export const getNotationDisplay = (notation: Notation): string => NOTATION_DISPLAY[notation];