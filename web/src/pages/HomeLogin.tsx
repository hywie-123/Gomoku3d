import { Fragment } from "react";
import { useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";

import { TextField } from "@mui/material"

import { MyButton } from "../components/MyButton";
import { HomeCreateAccount } from "./HomeCreateAccount";

const LoginButton = styled(MyButton)({
    display: 'block',
    margin: "8px 0",
    width: '100%',
});

export function HomeLogin(props: {
    onLogin: (
        username: string,
        password: string,
        onError: (message: string) => void) => void,
}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [openCreateAccountDialog, setOpenCreateAccountDialog] = useState(false);
    return <Fragment>
        <TextField
            variant='standard' error={!!errorMessage} autoFocus
            id="username"
            placeholder="User Name"
            onChange={() => setErrorMessage("") }/>
        <TextField
            variant='standard' error={!!errorMessage}
            id="password"
            type='password'
            placeholder="Password"
            helperText={errorMessage}
            onChange={() => setErrorMessage("") }/>
        <div css={css({ marginTop: 8 })}>
            <LoginButton variant="outlined" onClick={() => {
                const username = (document.getElementById("username")! as HTMLInputElement).value;
                const password = (document.getElementById("password")! as HTMLInputElement).value;
                props.onLogin(username, password, message => {
                    setErrorMessage(message);
                    (document.getElementById("password")! as HTMLInputElement).value = "";
                });
            }}>Login</LoginButton>
            <LoginButton variant="text"
                onClick={() => setOpenCreateAccountDialog(true)}>
                Create Account
            </LoginButton>
        </div>
        <HomeCreateAccount
            open    ={openCreateAccountDialog}
            onCancel={() => setOpenCreateAccountDialog(false)}
            onOK    ={(username, password) => {
                (document.getElementById("username")! as HTMLInputElement).value = username;
                (document.getElementById("password")! as HTMLInputElement).value = password;
                props.onLogin(username, password, setErrorMessage);
        }} />
    </Fragment>
}