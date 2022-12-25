import styled from "styled-components";

export const LandingContainer = styled.section`
    width: 100%; height: 100vh; min-height: 500px; max-height: 1200px;
    display: flex;  flex-direction: row;

    & .intro{
        height: 100%;
        width: 45%;
        flex-shrink: 1;
        justify-content: flex-start;
        & h1{
            width: 95%;
            font-size: 4em; font-weight: 500;font-family: 'Barlow', sans-serif;
            text-align: center;
            & span{
                background-color: yellow;
            }
        }
    }

    & .image{
        width: 45%;
        height: 100%;
        min-width: 700px;
        max-width: 1000px;
        & .inner{
            height: 80%; width: 100%;
            background-image: url('/landing10.jpg'); background-size: cover;
            background-position: center; background-repeat: no-repeat;
            border-radius: 20px;
        }
    }
`