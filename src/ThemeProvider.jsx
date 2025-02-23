import React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {

      // main: "#1976d2", // OG primary color
      main: "#008080", // Your custom primary color
      light: "#e8fffa",
      contrastText: "#ffffff", // Optional: Text color on primary buttons, etc.
    },
    secondary: {
      main: "#1976d2", // Your custom secondary color
      light: "#e3f2fc",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#474747", // Main text color
      secondary: "#707070", // Main text color
      light: "#C0C0C0", // Main text color
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
