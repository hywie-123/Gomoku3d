import { Fragment, useEffect, useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";

import { PageProps } from "./PageProps";
import { Game as GameCore } from "../game";

export function Game(props: PageProps) {
    useEffect(() => {
        const canvas = document.getElementById("game") as HTMLCanvasElement;
        const game = new GameCore(
            canvas,
            props.userName,
            props.gameId,
            () => props.setPageName('gameResult'),
            () => props.setPageName('gameResult'));
        game.start();

        window.addEventListener("resize", () => game.resize(canvas.width, canvas.height));
    });
    return <Fragment>
        <canvas id="game" css={css({
            position: "absolute",
            width : "100%",
            height: "100%",
        })}></canvas>
    </Fragment>
}