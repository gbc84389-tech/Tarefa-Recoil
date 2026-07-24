import styled from "styled-components";

export const Form = styled.form `
    display: flex;
    gap: 1.5rem;

    input {
        height: 3rem;
        width: 27rem;
        border: none;
        border-radius: 10px;
        background-color: #FFFFE3;
        font-size: 1.275rem;
        padding: 1rem;
    }

    input:focus {
        outline: none;
    }

    button {
        width: 6rem;
        border: none;
        border-radius: 10px;
        background-color: #FFFFE3;
        transition: .2s ease;
        font-weight: bold;
        will-change: transform;
        text-transform: uppercase;
    }

    button:hover {
        background-color: #ffffe3bb;
        transform: scale(1.05);
    }
`