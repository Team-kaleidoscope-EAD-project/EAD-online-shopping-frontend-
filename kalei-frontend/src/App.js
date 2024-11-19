import "./App.css";
import Main from "./Main";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "./assets/fonts/Amiko-Bold.ttf";
import "./assets/fonts/Amiko-Regular.ttf";
import "./assets/fonts/Amiko-SemiBold.ttf";

const theme = createTheme({
  typography: {
    fontFamily: "amiko_regular, Arial, sans-serif", // Default font family
    h1: {
      fontFamily: "amiko-bold", // For headers, use bold
    },
    h2: {
      fontFamily: "amiko_semibold", // For subheaders, use semi-bold
    },
    body1: {
      fontFamily: "amiko_regular", // For regular body text
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'amiko-bold';
          src: url(./assets/fonts/Amiko-Bold.ttf format('truetype');
        }
          @font-face {
          font-family: "amiko_regular";
          src: url(./assets/fonts/Amiko-Regular.ttf);
        }
        @font-face {
          font-family: "amiko_semibold";
          src: url(./assets/fonts/Amiko-SemiBold.ttf);
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
