import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(37, 169, 103)", 
    },
    text: {
      primary: "rgb(21, 80, 1)", 
      secondary: "rgb(21, 80, 1)",
    }
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <h1 style={{ fontSize: "200px", alignItems: "center" }}>HOME</h1>
      </ThemeProvider>
    </>
  );
}
export default App;
