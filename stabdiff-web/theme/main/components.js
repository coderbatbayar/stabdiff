import { variables } from "./variables";

/**
 * Main theme components
 */
export const components = {
  MuiAppBar: {
    styleOverrides: {
      root: ({theme}) => ({
        height: variables.appBar.height,
        borderBottom: `1px solid ${theme.palette.border.secondary[theme.palette.mode]}`,
        background: theme.palette.secondary[theme.palette.mode],
        backgroundImage: 'none',
        // boxShadow: '0 1px 8px 0 rgba(0,0,0,.1)'
      })
    }
  },
  MuiToolbar: {
    styleOverrides: {
      root: ({theme}) => ({
        minHeight: variables.toolbar.minHeight,
        paddingLeft: variables.toolbar.padding.left,
        paddingRight: variables.toolbar.padding.right,
        paddingTop: variables.toolbar.padding.top,
        paddingBottom: variables.toolbar.padding.bottom,

        [theme.breakpoints.down('lg')]: {
          minHeight: variables.toolbar.minHeight,
          paddingLeft: variables.toolbar.padding.left,
          paddingRight: variables.toolbar.padding.right,
          paddingTop: variables.toolbar.padding.top,
          paddingBottom: variables.toolbar.padding.bottom,
        },
      })
    }
  }
};