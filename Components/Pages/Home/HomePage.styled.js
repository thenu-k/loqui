import styled from "styled-components";
import { GLOBAL_SETTINGS } from "../../../frontend.config";

export const HomeContainer = styled.section`
    width: 100%; 
    display: flex; flex-direction: row; justify-content: center;
    background-color: ${`${GLOBAL_SETTINGS.COLOR_SCHEMES.LIGHT[2]}`};
    min-height: calc(100vh - 50px);

    & .inner.homePage{
        margin-top: 40px;
        width: 80%;
        max-width: 1500px;
        display: flex; flex-direction: row; justify-content: space-between;
        position: relative;
    }
`