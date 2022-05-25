import { useRef, useState } from "react";
import * as ReactDOM from "react-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { blue } from "@mui/material/colors";

import { PageName } from "./pages/PageName";
import { Home } from "./pages/Home";

const theme = createTheme({
    typography: {
        fontFamily: 'Ubuntu, sans-serif',
    },
    palette: {
        primary: blue,
        background: {
            default: blue[50],
        },
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
