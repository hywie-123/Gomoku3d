import { useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";

import { Container, Grid, TextField, Typography, useTheme } from "@mui/material"
import { blueGrey } from "@mui/material/colors";

import { PageName } from "./PageName"
import { MyButton, MyLargeButton } from "../components/MyButton";

const LoginButton = styled(MyButton)({
    display: 'block',
    margin: "8px 0",
    width: '100%',
});

const PlayButton = styled(MyLargeButton)({
    display: 'block',
    margin: "8px 0",
})

export function Home(props: {
    navTo: (pageName: PageName) => void,
}) {
    const theme = useTheme();
    const [hasLogin, setHasLogin] = useState(false);
    return <Container maxWidth="xs" css={css({
        padding: "96px 0",
    })}>
        <Typography variant='h1' color='primary' css={css({
            fontSize: "4.5rem",
            textAlign: 'center',
        })}>Gomoku3D</Typography>
        <Grid container css={css({
            marginBottom: 8,
            alignItems: 'center',
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
            })}>
                <TextField variant='standard'                 fullWidth placeholder="User Name" />
                <TextField variant='standard' type='password' fullWidth placeholder="Password" />
                <div css={css({ marginTop: 8 })}>
                    <LoginButton variant="outlined">Login</LoginButton>
                    <LoginButton variant="text">Create Account</LoginButton>
                </div>
            </Grid>
            <Grid item xs={12} md={6} css={css({
                [theme.breakpoints.up('md')]: {
                    paddingLeft: 12,
                },
            })}>
                <PlayButton variant="outlined" color="primary">
                    Quick Game</PlayButton>
                <PlayButton variant="outlined" color="primary">
                    Select Room</PlayButton>
                <PlayButton variant="outlined" color="primary">
                    Player vs. Computer</PlayButton>
            </Grid>
        </Grid>
        <Typography css={css({ textAlign: 'center' })}>
            Open source under GPLv3 on&nbsp;
            <a href="https://github.com/PKU-Nekomaru/">GitHub</a>
        </Typography>
    </Container>
}
