import { useEffect, useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";

import { LinearProgress, Container, Grid, Backdrop, Typography, useTheme, Paper } from "@mui/material"
import { blueGrey } from "@mui/material/colors";

import { PageName } from "./PageName"
import { MyButton, MyLargeButton } from "../components/MyButton";
import { HomeLogin } from "./HomeLogin";
import { HomeUserProfile } from "./HomeUserProfile";

async function waitForGame(): Promise<void> {
    const res = await fetch('/api/v2/join');
    const resJson = await res.json();
    if (resJson.status === 'success')
        window.location.href = `/static/play.html`
    if (resJson.status === 'waiting') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return waitForGame();
    }
}

const PlayButton = styled(MyLargeButton)({
    display: 'block',
    margin: "8px 0",
})

export function Home(props: {
    navTo: (pageName: PageName) => void,
}) {
    const theme = useTheme();
    const [loading , setLoading ] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        fetch('/api/v2/login').then(
            async res => {
                const resJsonData = (await res.json()).data;
                if (resJsonData)
                    setUserName(resJsonData.username);
            })
    }, []);

    return <Container maxWidth="xs" css={css({
        padding: "96px 0",
    })}>
        <Typography variant='h1' color='primary' css={css({
            fontSize: "4.5rem",
            textAlign: 'center',
        })}>Gomoku3D</Typography>
        <Grid container css={css({
            marginBottom: 8,
        })}>
            <Grid item xs={12} md={6} css={css({
                [theme.breakpoints.up('md')]: {
                    paddingRight: 12,
                    borderRight: `1px solid ${blueGrey[200]}`,
                },
                [theme.breakpoints.down('md')]: {
                    paddingBottom: 8,
                    borderBottom: `1px solid ${blueGrey[200]}`,
                },
            })}>{ userName ?
                <HomeUserProfile username={userName} onLogout={() => {
                    fetch('/api/v2/login', { method: 'DELETE' });
                    setUserName("");
                }}/>:
                <HomeLogin onLogin={(username, password, errorCallback) => {
                    const reqBody = new FormData();
                    reqBody.append("username", username);
                    reqBody.append("password", password);
                    fetch('/api/v2/login', { method: 'POST', body: reqBody }).then(async res => {
                        const resJson = await res.json();
                        if (resJson.status === 'success')
                            setUserName(resJson.data.username);
                        else
                            errorCallback(resJson.message);
                    });
                }} />}
            </Grid>
            <Grid item xs={12} md={6} css={css({
                [theme.breakpoints.up('md')]: {
                    paddingLeft: 12,
                },
            })}>
                <PlayButton
                    variant="outlined" color="primary" disabled={!userName}
                    onClick={async () => {
                        setLoading(true);
                        waitForGame();
                    }}>
                    Quick Game</PlayButton>
                {/* <PlayButton variant="outlined" color="primary" disabled={!userName}>
                    Select Room</PlayButton> */}
                <PlayButton
                    variant="outlined" color="primary" disabled={!userName}
                    onClick={async () => {
                        await fetch("/api/v2/join-vs-ai");
                        window.location.href = `/static/play.html`
                    }}>
                    Player vs. Computer
                </PlayButton>
            </Grid>
        </Grid>
        <Typography css={css({ textAlign: 'center' })}>
            Open source under GPLv3 on&nbsp;
            <a href="https://github.com/PKU-Nekomaru/">GitHub</a>
        </Typography>
        <Backdrop open={loading}>
            <LinearProgress  css={css({
                position: 'absolute',
                top: 0,
                width: "100%",
                height: 8,
            })}/>
        </Backdrop>
    </Container>
}
