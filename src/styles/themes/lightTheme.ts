// my-theme.ts

import { base } from './base';

const baseLT = {
  color: {
    primary_color: '#016FBD',
    secondary_color: '#FCFCFC',
    text: '#1B1B1B',
    highlight: '#F0F0F0',
  },

  shadow: {
    light: '0px -5px 16px 10px rgba(0, 0, 0, 0.25)',
  },
};

export const lightTheme = {
  ...base,
  ...baseLT,

  // individual component
  navbar: {
    height: '3.5em',

    backgroundColor: '#fff',
    color: baseLT.color.secondary_color,
    font: 'arial',
  },
};
