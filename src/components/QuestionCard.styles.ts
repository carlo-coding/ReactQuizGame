import styled from "styled-components";

export const Questions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > div {
        display: flex;
        flex-direction: column;
    }
`;

type ButtonWrapperProps = {
    correct: boolean
    userClicked: boolean
}

export const ButtonWrapper = styled.span<ButtonWrapperProps>`
    display: flex;
    width: 100%;

    & > button {

        width: 100%;
        background: ${({correct, userClicked})=>(
            correct
            ?"var(--soft-green)":
            !correct&&userClicked
            ?"var(--soft-red)"
            :"var(--white)"
        )}
    }
`;