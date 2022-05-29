import * as mixin from './mixin';
import { breakpoints, devices } from './breakpoints';

export const base = {
  breakpoints,
  devices,

  typography: {
    primaryLarge: 'arial',
    primarySmall: 'arial',
    bold: "'Alfa Slab One', Impact, Haettenschweiler, 'Arial Narrow Bold',sans-serif",
  },

  border: {},

  mixin: { ...mixin },
};
