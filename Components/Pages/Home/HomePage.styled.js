import styled from "styled-components";
import { GLOBAL_SETTINGS } from "../../../frontend.config";

export const HomeContainer = styled.section`
    width: 100%; 
    display: flex; flex-direction: row; justify-content: center;
    height: 1000px; 
    background-color: ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[2]}`};

    & .inner{
        margin-top: 40px;
        min-height: 500px;
        width: 80%;
    }
`