

/**
 * Main theme components
 */
export const components = {
  MuiCssBaseline: ({theme}) => ({
    styleOverrides: {
      body: {
        backgroundColor: 'red',
      }
    }
  }),
  MuiButton: {
    styleOverrides: {
      root: ({theme}) => ({
        height: 36,
        color: 'rgb(255, 255, 255)',
        fontWeight: 500,
        fontSize: 13,
        textTransform: 'initial',
        border: `1px solid ${theme.palette.border.secondary[theme.palette.mode]}`,
      })
    }
  }
};