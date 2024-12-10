export const PATHS = {
  home: { getPath: () => '/' },
  demo: { getPath: () => '/demo' },
} satisfies Record<string, { getPath: () => string }>;
