import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008080", // Your custom primary color
      contrastText: "#ffffff", // Optional: Text color on primary buttons, etc.
    },
    secondary: {
      main: "#6495ed", // Your custom secondary color
      contrastText: "#ffffff",
    },
    background: {
      default: "#f4f6f8", // Optional: Background color for the app
      paper: "#ffffff", // Background for cards, dialogs, etc.
    },
    error: {
      main: "#d32f2f", // Custom error color
    },
    success: {
    //   main: "#388e3c", // Custom success color
      main: "#008080", // Custom success color
    },
  },
  components: {
    MuiPopper: {
      styleOverrides: {
        root: {
          zIndex: 1301,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          zIndex: 1301, // Ensure it's above other elements like pagination
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          zIndex: 1000, // Ensure it's below the popover
        },
      },
    },
  },
});

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
