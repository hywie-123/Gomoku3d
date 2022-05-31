import styled from "@emotion/styled";
import { css } from "@emotion/react"

import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from "@mui/material";

import { MyButton } from "../components/MyButton";
import { useState } from "react";

const DialogTextField = styled(TextField)({
    display: 'block',
});

function getInputValue(id: string): string {
    return (document.getElementById(id)! as HTMLInputElement).value;
}

export function HomeCreateAccount(props: {
    open: boolean,
    onOK    : (username: string, password: string) => void,
    onCancel: () => void,
}) {
    const [errorMessage        , setErrorMessage        ] = useState("");
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

    function checkPasswordIsMatch() {
        const password      = getInputValue("createAccount.password"     );
        const passwordAgain = getInputValue("createAccount.passwordAgain");
        if (passwordAgain !== password)
            setErrorMessage("Passwords do not match");
        else
            setErrorMessage("");

    }
    return <Dialog open={props.open} css={css({
        '& .MuiDialog-paper': {
            borderRadius: 16,
        }
    })}>
      <DialogTitle css={css({
          padding: '16px 16px 0px 16px',
      })}>Create Account</DialogTitle>
      <DialogContent css={css({
          padding: '0 16px',
      })}>
            {/* <DialogContentText></DialogContentText> */}
            <DialogTextField
                variant='standard' autoFocus error={!!usernameErrorMessage}
                id="createAccount.username"
                placeholder="User Name"
                helperText={usernameErrorMessage}
                onChange={event => {
                    const username = event.target.value;
                    if (username) {
                        fetch(`/api/v2/users/${username}`, { method: 'HEAD' }).then(res => {
                            if (event.target.value === username)
                                if (res.status === 200)
                                    setUsernameErrorMessage(`User name "${username}"is already taken.`);
                                else
                                    setUsernameErrorMessage("");
                            else;
                        })
                    }
                    else
                        setUsernameErrorMessage("User name must not be empty.");
                } }/>
            <DialogTextField
                variant='standard'
                id="createAccount.nickname"
                placeholder="Nickname (optional)"/>
            <DialogTextField
                variant='standard'
                id="createAccount.password"
                type='password'
                placeholder="Password"
                onChange={checkPasswordIsMatch}/>
            <DialogTextField
                variant='standard' error={!!errorMessage}
                id="createAccount.passwordAgain"
                type='password'
                placeholder="Password (again)"
                helperText={errorMessage}
                onChange={checkPasswordIsMatch}/>
      </DialogContent>
      <DialogActions>
            <MyButton variant='text' onClick={props.onCancel}>Cancel</MyButton>
            <MyButton variant='contained' disableElevation onClick={() => {
                const username      = getInputValue("createAccount.username"     );
                const nickname      = getInputValue("createAccount.nickname"     );
                const password      = getInputValue("createAccount.password"     );
                const passwordAgain = getInputValue("createAccount.passwordAgain");
                if (password !== passwordAgain) {
                    setErrorMessage("Passwords do not match");
                    return;
                }

                const reqBody = new FormData();
                reqBody.append("username", username);
                reqBody.append("nickname", nickname);
                reqBody.append("password", password);
                fetch('/api/v2/users', { method: 'POST', body: reqBody }).then(async res => {
                    const resJson = await res.json();
                    if (resJson.status === 'success')
                        props.onOK(username, password);
                    else
                        setErrorMessage(resJson.message);
                });
            }}>OK</MyButton>
      </DialogActions>
    </Dialog>
}