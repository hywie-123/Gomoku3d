import { Fragment, useEffect, useState } from "react";
import { css } from "@emotion/react"
import styled from "@emotion/styled";

import { PageName } from "./PageName";
import { Game as GameCore } from "../game";

export function Game(props: {
    navTo: (pageName: PageName) => void,
}) {
    useEffect(() => {
        const canvas = document.getElementById("game") as HTMLCanvasElement;
        const game = new GameCore(
            canvas,
            [11, 11, 11],
            async () => {
                window.location.href = "/static/victory.html";
                return undefined as any as never;
            },
            async () => {
                window.location.href = "/static/defeat.html";
                return undefined as any as never;
            });
        game.start();

        window.addEventListener("resize", () => game.resize(canvas.width, canvas.height));
    }, []);
    return <Fragment>
        <canvas id="game" css={css({
            width : "100%",
            height: "100%",
        })}></canvas>
    </Fragment>
}