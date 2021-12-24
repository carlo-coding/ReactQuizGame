import styled, { createGlobalStyle } from "styled-components";
import bgImage from "./images/backg.jpg";

export const GlobalStyles = createGlobalStyle`
    :root {
        --gray: #D2D2D2;
        --white: #FFF;
        --shadow: 5px 5px 10px 1px var(--gray);
        --soft-red: #FF7777;
        --soft-green: #77FF78;
    }
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
        font-family: 'Poppins', sans-serif;
    }
    html {
        height: 100%;
    }
    body {
        background-size: cover;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        background: var(--white);
    }

    .btn {
        all: initial;
        font-family: inherit;
        cursor: pointer;
        user-select: none;
        padding: 0.5em 1em;
        box-shadow: 2px 2px 5px 1px var(--gray);
        border-radius: 10px;
        margin: 10px 0;
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    padding: 2em;
    border-radius: 5px;
    box-shadow: var(--shadow);
`;

export default {}