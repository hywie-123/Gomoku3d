import { useState } from "react";
import * as ReactDOM from "react-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { blue, blueGrey } from "@mui/material/colors";

import { PageName, PageProps } from "./pages/PageProps";
import { Home } from "./pages/Home";
import { Game } from "./pages/Game";
import { GameResult } from "./pages/GameResult";

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

const pages: { [key in PageName]: (props: PageProps) => JSX.Element } = {
    home: Home,
    game: Game,
    gameResult: GameResult,
}

function App() {
    const [pageName, setPageName] = useState<PageName >('home');
    const [userName, setUserName] = useState<string>('');
    const [gameId  , setGameId  ] = useState<string>('');
    const CurrentPage = pages[pageName];
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <CurrentPage
            pageName={pageName} setPageName={setPageName}
            userName={userName} setUserName={setUserName}
            gameId  ={gameId  } setGameId  ={setGameId  }/>
    </ThemeProvider>
}

ReactDOM.render(<App />, document.getElementById("root"));
