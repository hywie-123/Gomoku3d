import { useRef, useState } from "react";
import * as ReactDOM from "react-dom";

import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { blue, blueGrey } from "@mui/material/colors";

import { PageName } from "./pages/PageName";
import { Home } from "./pages/Home";

const theme = createTheme({
    palette: {
        primary: blue,
    },
    typography: {
        fontFamily: 'Ubuntu, sans-serif',
        body1: {
            color: blueGrey[700],
        }
    },
});

const pages: { [key in PageName]: (props: {
    navTo: (pageName: PageName) => void,
}) => JSX.Element } = {
    home: Home,
}

function App() {
    const [pageName, setPageName] = useState<PageName >('home');
    const CurrentPage = pages[pageName];
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <CurrentPage navTo={setPageName} />
    </ThemeProvider>
}

ReactDOM.render(<App />, document.getElementById("root"));
