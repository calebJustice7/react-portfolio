import { HashRouter } from "react-router-dom";
import Routes from "./router/routes";
import "./index.css";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(42,156,213,1)",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <ThemeProvider theme={theme}>
        <Sidebar />
        <HashRouter basename="/">
          <Routes />
        </HashRouter>
      </ThemeProvider>
    </Box>
  );
}

export default App;
