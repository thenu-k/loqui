import styled from "styled-components";

export const LandingContainer = styled.section`
    width: 100%; height: calc(100vh - 60px); min-height: 500px; 
    display: flex;  flex-direction: row;

    & .image{
        width: 35%; height: 80%;
        max-width: 700px; min-width: 500px;
        min-height: 500px;
        max-height: 700px;
        & .inner{
            border-radius: 20px;
            height: 100%; width: 100%; 
            background-image: url('/landing5.jpg'); background-size: cover;
            background-repeat: no-repeat; background-position: center;
        }
    }
`