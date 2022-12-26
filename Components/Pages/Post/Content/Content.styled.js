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
            margin-bottom: 40px;
            & h1{
                font-size: 2.5em; font-weight: 600;
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
            width: 80%; height:clamp(300px,30vw,500px); background-color: black;
            min-width: 400px;
            margin-bottom: 40px;
            border-radius: 5px;
            background-position: center; background-size: cover;
            background-repeat: no-repeat;
        }
        & .text{
            width: 80%;
            margin-bottom: 40px;
            & *{line-height: 2}
        }
    }
`