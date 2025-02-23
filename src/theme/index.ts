import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F4F4F3",
      light: "#F2D4CC",
    },
    lightPrimary: {
      main: "#f3d9d2",
    },
    secondary: {
      main: "#262626",
    },
    background: {
      default: "#F3D9D2",
    },
    modeTabButton: {
      main: "rgb(155, 155, 155, 0.5)",
    },
    buttonBackground: {
      main: "#D69F95",
    },
    action: {
      hover: "white",
    },
    ganttHoliday: {
      main: "rgb(71,71,71,0.4)",
    },
    dividerBorder: {
      main: "#F4F4F3",
    },
    colorOption: {
      white: {
        solid: "#F4F4F3",
        gradient: {
          gradientLeft: "#BFBFBF",
          gradientRight: "#F4F4F3",
        },
      },
      blue: {
        solid: "#3DCBFF",
        gradient: {
          gradientLeft: "#3DCBFF",
          gradientRight: "#3DCBFF",
        },
      },
      yellow: {
        solid: "#EFBE46",
        gradient: {
          gradientLeft: "#EFBE46",
          gradientRight: "#EFBE46",
        },
      },
      red: {
        solid: "#FF575C",
        gradient: {
          gradientLeft: "#FF575C",
          gradientRight: "#FF575C",
        },
      },
      green: {
        solid: "#3FC9CB",
        gradient: {
          gradientLeft: "#3FC9CB",
          gradientRight: "#3FC9CB",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "inter",
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
