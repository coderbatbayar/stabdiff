// import NouvelRKRBold from "../fonts/NouvelR/NouvelR KR-Bold.ttf";

/**
 * Main theme components
 */
export const components = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        scrollbarColor: "#6b6b6b #2b2b2b",
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          backgroundColor: "#2b2b2b",
          width: "15px"
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: 8,
          backgroundColor: "#6b6b6b",
          minHeight: 24,
          border: "3px solid #2b2b2b"
        },
        "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
          {
            backgroundColor: "#959595"
          },
        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
          {
            backgroundColor: "#959595"
          },
        "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
          {
            backgroundColor: "#959595"
          },
        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
          backgroundColor: "#2b2b2b"
        }
      },
      // "@font-face": {
      //   fontFamily: 'NouvelRKRBold',
      //   fontStyle: 'normal',
      //   fontDisplay: 'swap',
      //   fontWeight: 700,
      //   src: `local('NouvelRKRBold'), local('NouvelRKRBold'), url(${NouvelRKRBold}) format('ttf')`        
      // }
    }
  },
  MuiList: {
    styleOverrides: {
      root: {
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  },
  MuiModal: {
    styleOverrides: {
      root: {
        outline: "none",
        "&:focus": {
          outline: "none"
        }
      }
    }
  },
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        height: 36,
        color: "rgb(255, 255, 255)",
        fontWeight: 500,
        fontSize: 13,
        textTransform: "initial",
        border: `1px solid ${
          theme.palette.border.secondary[theme.palette.mode]
        }`
      })
    }
  },
  MuiToggleButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: "auto",
        margin: "auto",
        borderRadius: "24px !important",
        padding: "0px 20px 0px 20px !important",
        borderTopLeftRadius: "24px !important",
        borderTopRightRadius: "24px !important",
        borderBottomRightRadius: "24px !important",
        borderBottomLeftRadius: "24px !important",
        background: "black",
        border: "none",
        fontSize: "18px",
        fontWeight: "500",
        display: "flex",
        items: "center",
        color: "white",
        "&.Mui-selected": {
          backgroundColor: "#efed00",
          fontWeight: "500",
          color: "black"
        },
        "&:hover": {
          backgroundColor: "#efed00",
          color: "black"
        }
      })
    }
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: ({ theme }) => ({
        minHeight: "auto",
        display: "flex",
        margin: "auto",
        gap: "12px",
        items: "center"
      })
    }
  },
  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "0 !important"
      })
    }
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.Mui-focused": {
          borderColor: theme.palette.border.secondary
        }
      }),
      notchedOutline: ({ theme }) => ({
        borderColor: theme.palette.border.secondary
      })
    }
  }
};
