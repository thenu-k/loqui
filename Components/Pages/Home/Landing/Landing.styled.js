import styled from "styled-components";

export const LandingContainer = styled.section`
    width: 100%; height: 100vh;
    display: flex;  flex-direction: row;

    & .intro{
        height: 100%;
        width: 50%;

        & h1{
            width: 85%;
            font-size: 4em; font-weight: 400;  font-family: 'Playfair Display', serif;
            text-align: left;
        }
    }

    & .image{
        width: 50%;
        height: 100%;

        & .inner{
            height: 80%; width: 80%;
            background-image: url('/landing10.jpg'); background-size: cover;
            background-position: center; background-repeat: no-repeat;
            border-radius: 10px;
        }
    }
`