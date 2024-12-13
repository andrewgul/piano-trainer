export const PATHS = {
  home: { getPath: () => '/' },
  demo: { getPath: () => '/demo' },
  guessNote: { getPath: () => '/guess-note' },
} satisfies Record<string, { getPath: () => string }>;
