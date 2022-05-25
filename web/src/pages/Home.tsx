import { css } from "@emotion/react"
import { Container, Typography } from "@mui/material"

import { PageName } from "./PageName"

export function Home(props: {
    navTo: (pageName: PageName) => void,
}) {
    return <Container maxWidth="sm" css={css({
        paddingTop: 96,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    
    })}>
        <style>{`
            input, select, textarea {
                font-size: inherit;
                color: #607D8B;
                padding: 0.25em;
                border-radius: 1em;
                border: #CFD8DC 1px solid;
                border-bottom: #2196F3 3px solid;
            }
            
            input:focus, select:focus, textarea:focus {
                outline: none;
                border-bottom: #2196F3 3px solid;
            }
            
            .button {
                color: #FFFFFF;
                font-size: 2em;
                text-decoration: none;
            
                background-color: #2196F3;
                border-radius: 1em;
                box-shadow: 1px 1px 5px #607D8B;
                cursor: pointer;
            
                padding: 0.1em 0.6em 0.1em 0.3em;
                margin: 0.15em;
                display: flex;
                align-items: center;
            }
            
            .button span {
                width: 4em;
                text-align: center;
            }
            
            .button svg path {
                fill: #FFFFFF;
            }
            
            .button-ready {
                background-color: #66BB6A;
            }
            
            .button-disabled {
                background-color: #90A4AE;
                color: #ECEFF1;
                cursor: not-allowed;
                pointer-events: none;
            }
            
            .button-disabled svg path {
                fill: #ECEFF1;
            }

            header { margin: 0.2em; flex-direction: column; }
            main   { margin: 0.2em; }
            .title { margin: 0.1em; color: #2196F3; font-size: 6em;   }
            .text  { color: #90A4AE; font-size: 1.5em; }

            .user-name-container {
                margin-bottom: 1em;
            }

            label[for="user-name"] {
                color: #2196F3;
            }
        `}</style>
        <Typography variant='h1' color='primary'>Gomoku3D</Typography>
        <div className="user-name-container">
            <label htmlFor="user-name">User Name:</label>
            <input id="user-name" type="text"></input>
        </div>
        <a id="play" className="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em">
                <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z M9.5,16.5l7-4.5l-7-4.5V16.5z" />
            </svg>
            <span>Play</span>
        </a>
        <p id="status" className="text">looking for games.</p>
        <p id="author" className="text">Nekomaru(at)pku.edu.cn</p>
        <p id="license" className="text">
            Licensed under GPLv3 on <a href="https://github.com/PKU-Nekomaru/">GitHub</a>
        </p>
    </Container>
}