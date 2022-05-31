import { Fragment, useEffect } from "react";
import { useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { MyButton } from "../components/MyButton";

export function HomeUserProfile(props: {
    username: string,
    onLogout: () => void,
}) {
    const [userProfile, setUserProfile] = useState({} as any);
    useEffect(() => {
        fetch(`/api/v2/users/${props.username}`).then(async res => {
            const resJsonData = (await res.json()).data;
            setUserProfile(resJsonData);
        })
    }, [])
    return userProfile ? <Fragment>
        <span>Logged in as:<br/></span>
        <span>{`${userProfile.nickname} `}</span>
        <span>{`(${userProfile.username})`}</span>
        <div css={css({
            display: 'flex',
            justifyContent: 'flex-end',
        })}>
            <MyButton
                variant='outlined' disableElevation
                onClick={props.onLogout}>
                Logout
            </MyButton>
        </div>
    </Fragment> : <Fragment></Fragment>
}
