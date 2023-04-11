/**
 * Main theme pallete
 */
export const palette = {
  mode: 'dark',
  // Black
  primary: {
    main: 'rgb(0, 0, 0)',
    dark: 'rgb(0, 0, 0)',
    light: 'rgb(255, 255, 255)',
    contrastText: '#ffffff',
  },
  // White
  secondary: {
    main: 'rgb(255, 255, 255)',
    dark: 'rgb(17, 15, 26)',
    light: 'rgb(255, 255, 255)',
  },
  // Yellow
  tertiary: {
    main: 'rgb(239, 223, 0)',
    dark: 'rgb(239, 223, 0)',
    light: 'rgb(239, 223, 0)',
  },
  // Gray
  quaternary: {
    main: 'rgb(161, 161, 169)',
    dark: 'rgb(161, 161, 169)',
    light: 'rgb(161, 161, 169)',
  },
  // Light blue
  quinary: {
    main: 'rgb(129, 173, 249)',
    dark: 'rgb(129, 173, 249)',
    light: 'rgb(129, 173, 249)',
  },
  background: {
    default: 'rgb(255, 255, 255)',
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