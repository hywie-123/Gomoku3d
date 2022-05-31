import { Fragment, useEffect, useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";

import { PageProps } from "./PageProps";
import { MyLargeButton } from "../components/MyButton";

export function GameResult(props: PageProps) {
    const [victory, setVictory] = useState(false);
    useEffect(() => {
        fetch(`/api/v2/games/${props.gameId}`).then(async res => {
            const resJson = await res.json();
            if (resJson.data.winner === props.userName)
                setVictory(true);
        })
    });
    return <div css={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    })}>
        <h1 css={css({
            margin: "0.3em",
            color: "#2196F3",
            fontSize: "6em",
        })}>{victory ? "Victory" : "Defeat"}</h1>
        <MyLargeButton
            variant="contained" disableElevation
            onClick={() => {
                props.setPageName('home');
                props.setGameId('');
            }}>Back</MyLargeButton>
    </div>
}