import styled from "styled-components";

export const ContentContainer = styled.div`
    width: 100%;
    & .content.inner{
        width: 80%;
        display: flex;
        flex-direction: column;
        & .meta{
            width: 100%;
            display: flex; flex-direction: column; 
            margin-bottom: 60px;
            & h1{
                font-size: 3em; font-weight: 400;
                margin-bottom: 20px;
            }
            & span{
                width: fit-content;
                padding: 5px 10px; 
                background-color: black; color: white;
                border-radius: 5px;
            }
        }
        & .image{
            width: 100%; height:clamp(300px,30vw,500px); background-color: black;
            min-width: 400px;
            margin-bottom: 60px;
            border-radius: 5px;
            background-position: center; background-size: cover;
            background-repeat: no-repeat;
        }
        & .text{
            width: 100%;
            margin-bottom: 60px;
            & *{line-height: 2; font-size:1.2em}
        }
    }
`