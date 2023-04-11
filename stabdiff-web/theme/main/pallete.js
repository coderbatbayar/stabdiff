/**
 * Main theme pallete
 */
export const palette = {
  mode: 'dark',
  primary: {
    main: 'rgb(5, 2, 14)',
    dark: 'rgb(5, 2, 14)',
    light: 'rgb(5, 2, 14)',
    contrastText: '#ffffff',
  },
  secondary: {
    main: 'rgb(17, 15, 26)',
    dark: 'rgb(17, 15, 26)',
    light: 'rgb(17, 15, 26)',
  },
  tertiary: {
    main: 'rgb(255, 255, 255)',
    dark: 'rgb(255, 255, 255)',
    light: 'rgb(255, 255, 255)',
  },
  background: {
    default: 'rgb(5, 2, 14)',
    paper: 'rgb(5, 2, 14)',
  },
  border: {
    primary: {
      dark: 'rgb(42, 40, 50)',
      light: 'rgb(42, 40, 50)',
    },
    secondary: {
      dark: 'rgb(42, 40, 50)',
      light: 'rgb(42, 40, 50)',
    },
    tertiary: {
      dark: 'rgb(226, 232, 240)',
      light: 'rgb(226, 232, 240)',
    }
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    '0 1px 8px 0 rgba(0,0,0,.1)',
    ...Array(20).fill('none')
  ]
};