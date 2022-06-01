import { useEffect, useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";

import { LinearProgress, Container, Grid, Backdrop, Typography, useTheme, Paper } from "@mui/material"
import { blueGrey } from "@mui/material/colors";

import { PageProps } from "./PageProps"
import { MyButton, MyLargeButton } from "../components/MyButton";
import { HomeLogin } from "./HomeLogin";
import { HomeUserProfile } from "./HomeUserProfile";

async function waitForGame(): Promise<string> {
    const res = await fetch('/api/v2/join');
    const resJson = await res.json();
    if (resJson.status === 'waiting') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return await waitForGame();
    }
    return resJson.data["game_id"];
}

const PlayButton = styled(MyLargeButton)({
    display: 'block',
    margin: "8px 0",
})

export function Home(props: PageProps) {
    const theme = useTheme();
    const [loading , setLoading ] = useState(false);

    useEffect(() => {
        fetch('/api/v2/login').then(
            async res => {
                const resJsonData = (await res.json()).data;
                if (resJsonData) {
                    props.setUserName(resJsonData.username);
                    if (resJsonData.gameid) {
                        props.setPageName('game');
                        props.setGameId  (resJsonData.gameid);
                    }
                }
            })
    }, []);

    return <Container maxWidth="xs" css={css({
        padding: "96px 48px",
    })}>
        <Typography variant='h1' color='primary' css={css({
            fontSize: "calc(min(56px, 15vw))",
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
            })}>{ props.userName ?
                <HomeUserProfile username={props.userName} onLogout={() => {
                    fetch('/api/v2/login', { method: 'DELETE' });
                    props.setUserName("");
                }}/>:
                <HomeLogin onLogin={(username, password, errorCallback) => {
                    const reqBody = new FormData();
                    reqBody.append("username", username);
                    reqBody.append("password", password);
                    fetch('/api/v2/login', { method: 'POST', body: reqBody }).then(async res => {
                        const resJson = await res.json();
                        if (resJson.status === 'success')
                            props.setUserName(resJson.data.username);
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
                    variant="outlined" color="primary" disabled={!props.userName}
                    onClick={async () => {
                        setLoading(true);
                        const gameId = await waitForGame();
                        props.setPageName('game');
                        props.setGameId(gameId);
                    }}>
                    Quick Game</PlayButton>
                {/* <PlayButton variant="outlined" color="primary" disabled={!userName}>
                    Select Room</PlayButton> */}
                <PlayButton
                    variant="outlined" color="primary" disabled={!props.userName}
                    onClick={async () => {
                        const gameId = (await(await fetch("/api/v2/join-vs-ai")).json()).data["game_id"];
                        props.setPageName('game');
                        props.setGameId(gameId);
                    }}>
                    Player vs. Computer
                </PlayButton>
            </Grid>
        </Grid>
        <Typography css={css({ textAlign: 'center' })}>
            Open source under GPLv3 on&nbsp;
            <a href="https://github.com/Nekomaru-PKU/Gomoku3d">GitHub</a>
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
